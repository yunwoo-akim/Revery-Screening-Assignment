'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6ea241da4a0d7f0efe37b51b8254221a",
"index.html": "41e9815d32df1b3b513f2ed99ece0114",
"/": "dc3a3352a9896efddfd16a5b2417098e",
"revery-initial-screening/version.json": "6ea241da4a0d7f0efe37b51b8254221a",
"revery-initial-screening/index.html": "dc3a3352a9896efddfd16a5b2417098e",
"revery-initial-screening/main.dart.js": "9ae243e707c9f943a171b21b40913732",
"revery-initial-screening/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"revery-initial-screening/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"revery-initial-screening/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"revery-initial-screening/manifest.json": "4d22e518d82058f5c8f1e3c627fb77a0",
"revery-initial-screening/assets/AssetManifest.json": "ef63d3c34d4759fe67bfca42bae285b8",
"revery-initial-screening/assets/NOTICES": "ddf7dd8b313c955adb44d8130838e0ac",
"revery-initial-screening/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"revery-initial-screening/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"revery-initial-screening/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"revery-initial-screening/assets/assets/kado-sit-eat.riv": "684140ccd1400c24715370b32664d127",
"main.dart.js": "874e005e7656ad70155e2bc4a14aa630",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d22e518d82058f5c8f1e3c627fb77a0",
".git/config": "1884b2b980cd5affe1938869246aa5ac",
".git/objects/92/d865868d758d090912f7d17c5ef3f4d59c831d": "2b4c5bdd64a4adf6661fd69008f984c2",
".git/objects/50/e22ee4ccfe78c90e94d8576020ad04abf948ed": "049e0f5dd3af3661ad284c94409d11e2",
".git/objects/6a/739f0ed079fc8829d49e4d93f4bef5fa729221": "3bf78b8c1d7d6887af72b5d865fcb35a",
".git/objects/35/9c2d8c2a8ba63aba9741c0f830ace8d5d935d8": "baf76caf781db7c39a2dcd6ed5fb375c",
".git/objects/0b/ad8630310a6ffca504e2452e8a8aab95a9b5ab": "f36a466bc97c8e7b7371a6e977490984",
".git/objects/93/dbda4a8967d24bfcb70894edb8bca5635ff1f7": "2b6b137fbf6cbc827e951aacd53675db",
".git/objects/5a/aa2daa061755e9544ae9d9e3673444d266e9ee": "42092cf02dc80c9eab2cc0b4ff8af1a1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/3cfbcf1f4f7471ca8d9ed25b836e6c89fdee39": "7a0aaea2b80b950c7468407d0d06426a",
".git/objects/f2/7fdea3c8d50c943f2f6d214605da2c0ac1af5b": "f437fb4b18def349c037f4f258dfdf8e",
".git/objects/f2/c4b0d624700d2a6a080ae70974b9836f75872d": "e723c04b85a2133ea901126f1757c2d1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/d1fc962c05ab077bd37d6bb1411e887b86a413": "9691c82a7f1d859d3e78f6499ed2f550",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7a9cd805506da222b140c76f6156b74a3eb707": "9dc4053ec9f415e22013d1c350f00dfa",
".git/objects/86/9d29cdee728dc62ec5b72d2ca61b57bd81d839": "1522eb0a364f271ccfbecf7a2d3a9130",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f7cb939d8ea58ed75f08fed72f4873b2157188": "de0d587cb257c179af5a2a740fe2e67e",
".git/objects/65/98c5cefb942b57772579dfba1a463b619603c9": "3238d5a9e9302b03b5027f0929493064",
".git/objects/30/c2ff6ee07345e73cc4aab1c7d4f133cbf04a24": "93b10eb66e36e8d5cdbba4fc549b424b",
".git/objects/5e/e6722cb02ab5704afb3ea3f1f0a945743dd530": "cc1c68b6d51309bc67696051d65676e3",
".git/objects/08/d9c055cdde1983578a2467b5ecbc3275f1d91d": "77c09238cb2fc5e33fca4e55591e7214",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c5/fbf0aec44dc7f98643d9b119d3f482dde881f8": "d1e3cb69b2bac01164365afdbcb761c2",
".git/objects/cb/26f818d8f1f218ce94a12a845efba673a5b699": "66ea9e8f5cc8faf6d0e6a4cc3488dc9e",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/002b7f0e846d7acc15c2cbc228a7e7663f2c57": "79fb2fbf4cc465266d849f6e016dcfd0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/15de2f2a74c3a7debd3e0eb5415b0515e815a3": "60911adac56bdcffed1b1ab5ce96c3bb",
".git/objects/24/85520248cc9a1c4e512ba0ac3b357311d271d3": "66f759939e088b09d3400baedaa9e1ee",
".git/objects/85/ce8fa5a7bf02166d323b579874d114116bae61": "5e404e6aa80cc0d2c6ffdcee219bc42b",
".git/objects/7f/de22104d852cc83b14017ef824ca61a485555d": "410ed03bc68036bbecf09b9ed20e7339",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6a52bf53d3620c051d8fff5de19992d",
".git/logs/refs/heads/master": "d6a52bf53d3620c051d8fff5de19992d",
".git/logs/refs/remotes/origin/master": "2288304c2c30e431eeee980b3019824a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8e6f29663039f20a31f2bd5b1ef587fe",
".git/refs/remotes/origin/master": "8e6f29663039f20a31f2bd5b1ef587fe",
".git/index": "82f0327892769e3d77f09a5bc3679c22",
".git/COMMIT_EDITMSG": "6e55092b3e58c47af565b80a01f65d2b",
"assets/AssetManifest.json": "ef63d3c34d4759fe67bfca42bae285b8",
"assets/NOTICES": "ddf7dd8b313c955adb44d8130838e0ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/kado-sit-eat.riv": "684140ccd1400c24715370b32664d127"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
