'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "12c205307ce2c4942c5f6027b50e3545",
".git/config": "84486421803da0455a9eb7e0a0b11fce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "fb17328b9ac904607a0770925b3b7c14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d861783d67f8f814c33019c7678353e6",
".git/logs/refs/heads/main": "3dfef231ca51d6ef8ab98757329f3ac5",
".git/logs/refs/remotes/origin/main": "af4ea38ee544e19ac4538a30778ea0c4",
".git/objects/00/006513941267b867b62486b5b489639395c121": "58142be0aab8389b74d54d8db52294d6",
".git/objects/13/a9932bc08d744a059fa9f33f4533f21de3e968": "33c34cf537f69fda258dcbc283a77ca1",
".git/objects/26/aaa29ce0ff08c9e2d47e11cac718169c205551": "6e3d52ca8f5f96eb32298dc813c68587",
".git/objects/28/0e697c121574d6e1b1a53b8f844e575e46fca4": "027fce6c7d41f20f6f52c04ec24bfa3c",
".git/objects/28/5f6294a3117c39d650e9972665798fdc529e22": "b5e09e7ded51051d153e6c51aa7d67fe",
".git/objects/2d/572d5b6090f85f345362221b930059ad5be7d7": "01a918fbd907a31b8abcb0d8ca356792",
".git/objects/2e/f9ec47fd582bd7489e65ec1a78fb82690251dd": "26fa5f493d99bf4679551f545f47e076",
".git/objects/30/4b17fc0ff68b2302abb7b186d8010520c59605": "ca499633602cae50ac571cdb7dfb1235",
".git/objects/31/67b5097d4d6f7619fdf7e9d1092c1cb69456b9": "a582c9119394d27bf5eed9b8aea32293",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/9250f5f6a18c056c711e5415666532591a4408": "eefa777648f51f75163c97be2628604f",
".git/objects/3b/035976757fbb67ffe2b26e3325e4902479d058": "7551e3f66f13837d2caacd971804bb49",
".git/objects/3b/f030f56aef6136886dd46eb9bdd1591fe4cea4": "bb88dba098af48c4886fa388c4836b79",
".git/objects/3c/cda386bfe7187fc03b0c5fb0fa234432a14084": "6856a1c2426fc0b36efcc4cd70c45707",
".git/objects/3d/9cbb8c5b69ace8a3540f8847a7a3b3ba383f9b": "22f4ec67fee9f9f1fdb997d9a6039d24",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/3b2dbe3c8efdc7d17d6b4e4e48b5d06de10dce": "fd834636f3d78108f5d3f0e3e73db075",
".git/objects/60/805570d456fe46e2ed9909918ffea07850d80a": "7561a2eb19a1020a3b4439d0363e5453",
".git/objects/64/7c23dd2a7dfdad779116424831e0d8a68c9785": "087653bdf11ebb474259af5678f9aca4",
".git/objects/6d/5a0a1bd57d966201dbb6a6fb3a3c183f19163f": "4ada2c6d60f03f855b27e64e7bd0612e",
".git/objects/6e/46074ce17812a432cb05356f919f13a65c9ba7": "d05ebd943a823218df898319672cd56d",
".git/objects/72/3fd7eadd8b093dfe92e1cd7770e4c24cef7007": "ea56ba6eb3e122512afda25cd10567e9",
".git/objects/77/232908eb57ed43f694106d9b6e89e01118aff8": "d96744c13ad15ff7250e6b2de2ce00e9",
".git/objects/78/8f8c44cd2050933c06aa2dc0e7d6fc33761671": "0e0861f6f335d550354471ad002302f5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/ef7ca798c6a0e48ee3f25159620575e3e835f9": "bf1c5fa68e626a5f1a4cf4db4868d4c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/de6ece7a0afc1d7e7c4d9c08e556fc04af914a": "223b2e28b0586040d22082e83a0ccd97",
".git/objects/98/8d072d701fcb621d42de54e327db8c09df6bb9": "3349b22263590f02bb4ff7bd72d04dca",
".git/objects/99/1f2a9336dfe7866a0ec9da43e4796aebb10544": "ab29121ae6a66cf1dcf7378378228e70",
".git/objects/99/c36c10ce3f220089f1ac71897ac7e596eea6cf": "1d282be0b963d403490c47cb4a791251",
".git/objects/9e/37393d70c39821ac1daf36f7ccda5cbe6eef49": "0b583754996922299dcea1aa38030b74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/85150aaaa3b078381119e99574c8f93d04403b": "febfb4c838664d4e8a9c02a9e8184e07",
".git/objects/a4/aa3fcec69334635d589b2cb1e114bb260a4440": "e5c75efc6f50fbe8320ddcdfe67946cc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/11641926f29fadba6f8ab107121630de9daa42": "2ac8536ac3b3b90cbad64194e118fa68",
".git/objects/af/d338d3007e565560c5d80397a331119490eb1f": "e24e6339c936db4963079423d9ebce4f",
".git/objects/b6/fab658352dbeb6a413c0bec80616dd94ec6b9c": "cb8c6eb0b48173b288c53bfbc91e378a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/5f8651f849e82f85d00d3cf3d88c9b33af8de5": "223571eec99596fddc2187eb8a467b35",
".git/objects/c9/a9540d92a7478464725a7662e628880fb89ccb": "d7852dedd08ab68fe3b79b4ee0b79c15",
".git/objects/ca/1f5f8bc4672cfa94f49f0db7ef03cab5d6893b": "bc8aa4593c3598da33cbb17124b8f762",
".git/objects/cc/21011488271d020b51317676e2323166bb37ce": "cb70f1ffa52a8c1d56d293b4a9f59024",
".git/objects/d4/3de22e5ad2baf4eb29c91b0fb47538d95e7ff4": "674dfcbcff82e16f51c21667c7234caa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9f99c49313aed525b950cf362420674f409bb5": "618d825dcd25a9392f4ff9208be90ea9",
".git/objects/da/6a1e67b08a7cfb21f6794cdfd7c8a76e07e6f6": "4b43fc3914bb659db4fd895e1b5a81ea",
".git/objects/dd/320abe521525074c7487938ad64086c1e3369d": "28fe93e420aa96f190ef13dffec986a7",
".git/objects/df/260eaccdb0ead2cae214a516f544d3d6723dbc": "4e326b6309a4652b860c6ce59ffae94c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/195bd652f6c2bfe20f24257883cf1e5df6ab0b": "9bc079539583ac73dba687e37ea2eddf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d4c7444a58a55ec92df6f8b89b5125a35135cb": "bf3ee3a5f15d7a0586cd80042004a8b6",
".git/refs/heads/main": "d003dc5c6089f3f0bf33480841001ea6",
".git/refs/remotes/origin/main": "d003dc5c6089f3f0bf33480841001ea6",
"assets/AssetManifest.json": "9d9600c7e1e118f8f8247e5c5c6be3ec",
"assets/assets/images/akad.png": "3e5bc128c614a210d3e6d94a3c3a691a",
"assets/assets/images/pasangan.png": "ca86a317f5e8455258650b6d977b1a42",
"assets/assets/images/upisplash.png": "5eed8a248e7e857cdc34faaafc678aa0",
"assets/assets/images/wish.png": "c9d494d4108648ba21bb5b5b3ab039e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fe7105118ae0e04ef2f8bb0b8d5cfed5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b019ebde0618d0dcd28283a32d2ed61a",
"/": "b019ebde0618d0dcd28283a32d2ed61a",
"main.dart.js": "20fe577217201adcacba543eae657935",
"manifest.json": "18b12630eb94002459ac5e887542f5ec",
"version.json": "24ac0f11722b5f3ce52a16538d37305e"
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
