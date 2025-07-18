'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3c33e4de43beed212ddbe40a15e62ca4",
"assets/AssetManifest.bin.json": "068fa6b25580ba404fda0b1c389c8cda",
"assets/AssetManifest.json": "21451c706a1ecb41d223b1e30f8bb975",
"assets/assets/configuration.json": "666642f350291f07b74fb4bf1f8d4d36",
"assets/assets/fonts/Kanit-Black.ttf": "85d1eb1c7446a7988773ce1c083eba17",
"assets/assets/fonts/Kanit-BlackItalic.ttf": "fd03a76584b3d0f3f66e4c3772d5a010",
"assets/assets/fonts/Kanit-Bold.ttf": "e397bc144284776cd0669e9342e5a531",
"assets/assets/fonts/Kanit-Medium.ttf": "da9eae892a8a3763f7fdbe859a4dd895",
"assets/assets/fonts/Kanit-Regular.ttf": "4e90956ae64683872e50efaffa7f354f",
"assets/assets/fonts/Kanit-SemiBold.ttf": "b116fde15528c69c1a0a698e82c32657",
"assets/assets/fonts/Kanit-Thin.ttf": "b944d853d744d70e4cdc1b2a97c12272",
"assets/assets/icons/butonrightpng.png": "4a23daad5bfd614b399210c69d432c79",
"assets/assets/icons/button.png": "8b5e7915663a23e63fc875654db9bebc",
"assets/assets/icons/Salle1.png": "d200afb09a9c753ad034cbc2985258ff",
"assets/assets/icons/Salle2.png": "727b67c0561a7a5dbea9e618b373d956",
"assets/assets/icons/Salle3.png": "de6fa12c82e4be3e2131b527bde9661c",
"assets/assets/icons/step1.png": "e83ed3831d4c5fad86a1ad3fd754e37c",
"assets/assets/icons/step2.png": "bef6997f1be89d516f071dfbd96030d1",
"assets/assets/icons/step2disabled.png": "16c422ba64eec5bb1a072950e797f834",
"assets/assets/icons/step3.png": "a2ed3e2bc1c20637d171b0879c255634",
"assets/assets/icons/step3disabled.png": "9d4d41d0e19c084337cdc01708e710fc",
"assets/assets/icons/step4.png": "8eab2a5d5d6081aef21f1bdb85f3819b",
"assets/assets/icons/step4disabled.png": "476449a7aa72baa3f8fc7aec93cb60c4",
"assets/assets/images/boul.png": "826dba0b6cc049fa00e93cc643687663",
"assets/assets/images/close.png": "4dd37ec68f0f82293ec775838d8c42ae",
"assets/assets/images/cong1.png": "2c903362c14e4ab9d1c578831756d08a",
"assets/assets/images/cong2.png": "26183cdc548c33a8be34b51f66b56ad7",
"assets/assets/images/congmain.png": "6ea16283155d7313d3f8de71c81d0038",
"assets/assets/images/container1.png": "bd9a25f405a0ff4fdb344ae5ca1686d9",
"assets/assets/images/container2.png": "dd1fb5976b5b685efbfddcee9c920d54",
"assets/assets/images/container3.png": "2fa669aca9b07f99b456aced0c9459ff",
"assets/assets/images/container4.png": "d3002ee61f5fc9f7523e16cf0b741c58",
"assets/assets/images/container5.png": "ddfa5dabd67d9716a78d3784d8d4296d",
"assets/assets/images/container6.png": "89aa23e192bd13b3f464a99801bed5bc",
"assets/assets/images/dd.png": "f320e6377a3cdead04cc0780d9090384",
"assets/assets/images/doc2.png": "388df8b795b186369a44ef8b68cc4527",
"assets/assets/images/doctor.png": "482c16700176fb81a1c0ccaae7f48749",
"assets/assets/images/false.png": "ff1539763d9da7325b41e261af790183",
"assets/assets/images/finalq1.png": "4c1fedc56bd58ff0746461ded9b67ea1",
"assets/assets/images/finalq2.png": "503bdafdf1dc7c4ebc7f0d58f0221163",
"assets/assets/images/finalq3.png": "26c41f2d2c750422f6b4682a1e388add",
"assets/assets/images/fois.png": "9fecd952805aae2932f1bbade7f9a29f",
"assets/assets/images/foiscorrect.png": "ce81d92e01738f3f4152a511c04fe59a",
"assets/assets/images/gradien.png": "eb85c155d4046edfa1f87180f8304465",
"assets/assets/images/home.jpg": "fabce19712bf926efa591645a7d03319",
"assets/assets/images/home.png": "e53151f74266c5949a5d8d2516f5163d",
"assets/assets/images/lame.png": "a50eb60d0588b71580fe901a27817b7a",
"assets/assets/images/land2.png": "92534380013f9781a11d88461715ac5b",
"assets/assets/images/landing.png": "8ffd2f8b29cb0786e4800155d49e2af4",
"assets/assets/images/landref.png": "491b268d9c70d3ae8e48fb2def970d66",
"assets/assets/images/logo.png": "f76e3d488a58a8f74495d15adf9b2632",
"assets/assets/images/main1.png": "6dd36e28e06f15e3897199d295d916a8",
"assets/assets/images/main2.png": "3368d784d39d093ca9b3fe62dd7ba2b5",
"assets/assets/images/main3.png": "c015436699f79e22666239d1616c1b92",
"assets/assets/images/main4.png": "f9253df046a8c44951c37d3bcec5a343",
"assets/assets/images/mainhidden1.png": "e5ed2454cd336d7ddadc389dd2ae299e",
"assets/assets/images/mainhidden2.png": "8b1378137fe6a62f1b17e31c93cbe376",
"assets/assets/images/mainhidden3.png": "ba7f886fd09a85f31fec5150fe9b37c5",
"assets/assets/images/mainhidden4.png": "0c76268c117f4e3c675f1be4cacc75ca",
"assets/assets/images/number1.png": "edb3d2f6521aed71c4af236e58011fca",
"assets/assets/images/number2.png": "d49e8c0d29b98eb5b00535407bb6b181",
"assets/assets/images/number3.png": "44e20f289e9c54a52a3ae05b026e45f6",
"assets/assets/images/number4.png": "fb290c03e7861918d59a03d739c523ee",
"assets/assets/images/pos1.png": "386634c6174b2d7791cf35c043e92482",
"assets/assets/images/pos2.png": "1f9ff44e6ed8fc9d8626f799824ee839",
"assets/assets/images/pos3.png": "26105cf07d10cb8d32edf475c3e41160",
"assets/assets/images/pos4.png": "3a901d38ab09f76f96c40920fd8ea742",
"assets/assets/images/pos5.png": "6e00da22eefa553f0911bbf02a0d63d6",
"assets/assets/images/q1.png": "0a109a2fd157efe32d4c67017269b816",
"assets/assets/images/q1big.png": "f913b9c7d774b24c2c77825c91966a83",
"assets/assets/images/q2.png": "fb3159379838ae41e78dcaec5a595662",
"assets/assets/images/q3.png": "fb3159379838ae41e78dcaec5a595662",
"assets/assets/images/q4.png": "ab5336d054da009ae74f67936b68a4fe",
"assets/assets/images/q5.png": "7a3871342810ce7bdf74945fcfae7929",
"assets/assets/images/q5big.png": "453b8ff8ccb8c21581bdcb1e4eb95881",
"assets/assets/images/q6.png": "2e3948e92b13730f6abc2e32780933be",
"assets/assets/images/q6big.png": "4f2a40b0e5d3cfa4bbc17122bc31b783",
"assets/assets/images/q7.png": "4365910a01a28e9dc07314992ee99ef6",
"assets/assets/images/q8.png": "ec6b147facdb13bd4faeb1d158693313",
"assets/assets/images/regles.png": "e262d55be906c293d3adeedf460d512e",
"assets/assets/images/right.png": "23196fec4ff9f10ab0ffd88cd7a59bc1",
"assets/assets/images/righticon.png": "206e2146683ec499c31d62474261b52f",
"assets/assets/images/Salle4.png": "c37e140ec5aa73344789714924a8571d",
"assets/assets/images/star.png": "e5fe2c9028755a60c93ce9f3fd54f060",
"assets/assets/images/welcome.png": "1d12882e791e68c87b59d45765db3277",
"assets/assets/images/yesa.png": "fb661370b619ddc995dd4050e6c11512",
"assets/assets/images/yesb.png": "fd55d5e034d4eacdcf8ed72e68cbc231",
"assets/FontManifest.json": "f26e6f91f674ce3b5dc48067a71f8bdb",
"assets/fonts/MaterialIcons-Regular.otf": "48d59e19aaddde7443363e487f17d082",
"assets/NOTICES": "227bb243b7185d864e5324b333b1aae2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "bbfbb058968c915069f759901450424c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ef52dbd9b8b99a4276ec764898c89ec",
"/": "2ef52dbd9b8b99a4276ec764898c89ec",
"main.dart.js": "5595f1c9c0d512e3227b89cbaaba65c3",
"manifest.json": "f26776e0e54c91d02297ecd0ed1b2e67",
"version.json": "3ec0f72ae970fff6223ac8f2269e120b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
