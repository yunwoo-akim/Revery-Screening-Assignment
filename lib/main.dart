import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:rive/rive.dart';

void main() => runApp(MyApp());

class IntroScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Introduction to Kado!'),
        ),
        body: Center(
            child: Column(children: <Widget>[
          Text(
            "\n\n\n\n\n\n\n\n\n\n\n\n\n\nHello! Today you'll be meeting Kado,"
            "the friendly koala. "
            "\nIt loves to eat and sleep, dance and wave. "
            "\nClick \"Continue\" to see Kado eat!"
            "\nClick \"Explore\" to see what other things Kado does in his free time!\n",
            textAlign: TextAlign.center,
            style: TextStyle(fontWeight: FontWeight.bold),
            overflow: TextOverflow.ellipsis,
          ),
              ElevatedButton(
                  child: Text("Explore"),
                  onPressed: () {
                    Navigator.pushNamed((context), '/explore');
                  }),
          Text("\n"),
          ElevatedButton(
              child: Text("Continue"),
              onPressed: () {
                Navigator.pushNamed((context), '/kado');
              }),

        ])));
  }
}

class MyApp extends StatefulWidget {
  @override
  _MyApp createState() => _MyApp();
}

class _MyApp extends State<MyApp> with SingleTickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kado Sits and Eats',
      initialRoute: '/',
      routes: {
        '/': (context) => IntroScreen(),
        '/kado': (context) => MyHomePage(),
      },
      theme: ThemeData(
        primarySwatch: Colors.lightBlue,
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final riveFile = 'assets/kado-sit-eat.riv';

  void _togglePlay() {
    debugPrint('playing: $isPlaying');
    setState(() => _controller.isActive = !_controller.isActive);
  }

  bool get isPlaying => _controller?.isActive ?? false;
  Artboard _riveArtboard;
  RiveAnimationController _controller;

  @override
  void initState() {
    super.initState();
    rootBundle.load(riveFile).then(
      (animation) async {
        final file = RiveFile.import(animation);
        final artboard = file.mainArtboard;
        artboard.addController(_controller = SimpleAnimation('Eating'));
        setState(() => _riveArtboard = artboard);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Kado Sits and Eats!')),
      body: Center(
        child: _riveArtboard == null
            ? const SizedBox()
            : Rive(artboard: _riveArtboard),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: _togglePlay, child: Text(isPlaying ? 'Stop' : 'Start')),
    );
  }
}
