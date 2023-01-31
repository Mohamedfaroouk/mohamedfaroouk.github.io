'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2ad59de635c67b3296dc0eb37a6b8866",
"assets/assets/fonts/bahjiibold.ttf": "5fd9889f5b719e7ac684959b5ec83242",
"assets/assets/fonts/bahjiiboldblack.ttf": "c6072c9e5cd851e297abd7e7b2a26909",
"assets/assets/fonts/bahjiiextrabold.ttf": "1a16aee5fa315182f31748fb518ea4e3",
"assets/assets/fonts/bahjiiextralight.ttf": "f245b8c3c15d0913ac21f174835ab15c",
"assets/assets/fonts/bahjiiregular.ttf": "3298a1639fb94816e52d942a2d78a0b8",
"assets/assets/fonts/bahjiisemilight.ttf": "fece2468fb84c1d7c0cf0423bc04d0a7",
"assets/assets/icons/arrows.png": "25a37aa53ce7f432ed8fe80ace2c0133",
"assets/assets/icons/backword.png": "a5cae0b294853911f3f499ce097fb4fd",
"assets/assets/icons/billIcon.png": "1b81bb341ac1b991ffdbe5ce5e3da193",
"assets/assets/icons/bills.png": "51f202c4d2b488a0efb0331c06f273ca",
"assets/assets/icons/bin.png": "d0e5ac7b8d8d232245058e200a9eb8f3",
"assets/assets/icons/binIcon.png": "57132ded28d2bdb1be1d1640870106a8",
"assets/assets/icons/cart.png": "b6b6ce4e94ef3dead47e1287dc4438ce",
"assets/assets/icons/cartIcon.png": "6c09516ee121ec1f1d93bcc808f50712",
"assets/assets/icons/categories.png": "bd2092f278c0977d76f8d31a0f839638",
"assets/assets/icons/categories2.png": "0f16f0a6a6f8c8ea5335c5a7a31b60bb",
"assets/assets/icons/category1.png": "a1b9431cdd492950265849bedf54faeb",
"assets/assets/icons/categorys.svg": "1eb8caa9e144db85a5b45b6c8a5fb3fd",
"assets/assets/icons/customers.png": "e482c63256f903e83f1ba9045af48d91",
"assets/assets/icons/edit.png": "e3778d50c2bc2e0efae2ce58b8370016",
"assets/assets/icons/editing.png": "dd1ced1145a743c2803ee3863ad268e5",
"assets/assets/icons/events.png": "9aef1489d52ba1ae7e5c60f43d71f295",
"assets/assets/icons/ex1.png": "0ba3053bc23567257ec937eab754dcce",
"assets/assets/icons/ex2.png": "6bc6e5fd3ea84860813d9fbf2590036e",
"assets/assets/icons/ex3.png": "1ec8931fc210a67eceae93649f7c3e53",
"assets/assets/icons/ex4.png": "817f506a2dfd2d506cc1eddc110ecccf",
"assets/assets/icons/features.png": "08fae38d30265de1de247efdc29127a2",
"assets/assets/icons/gps.png": "d6f176befc73bcdf283763d5c86e44eb",
"assets/assets/icons/id.png": "c6008d58be77ac46302e3feb35711d53",
"assets/assets/icons/id_image.png": "da8e6b58c851a578229f203a0564bf99",
"assets/assets/icons/inventory.png": "36a9373c194c1eba3f914a2dd26a4049",
"assets/assets/icons/inventory_date.png": "2c47ba9a26b5f64c9b923aa256932363",
"assets/assets/icons/languages.png": "f681ef3feebf34362ccc23b8c4f26986",
"assets/assets/icons/menu.png": "cb707b224d45c7ca77cea666395971c0",
"assets/assets/icons/moneyIcon.png": "4bb29cc452bbcbc0aa893972162d1f7e",
"assets/assets/icons/permissons.png": "0b760ba6cb644f35dd1af683da9950ac",
"assets/assets/icons/person.png": "61d6ab7d9b7304fcade0573b50f46cf0",
"assets/assets/icons/person2.png": "49aff2857a675b12bdb0e3a2dbb23300",
"assets/assets/icons/phone_call.png": "7147ca19cb88338682ba6ede7f2f6f53",
"assets/assets/icons/products.png": "3cddbe904f36cb1cdf743ab330fdf088",
"assets/assets/icons/product_noimage.png": "86d7e2f851adedd3143f0016acd8269c",
"assets/assets/icons/qty.png": "0986230d5a402e02dd548fe5f324950b",
"assets/assets/icons/reports.png": "e105f6144c64decc81afe5d35bf8c73e",
"assets/assets/icons/sales.png": "8e3ea13e5587f603a6fc64644c71ac59",
"assets/assets/icons/sandat.png": "6201c8d898be184a41142e778ca534a8",
"assets/assets/icons/search.png": "3c0f9a17911cdb22bea1284a671fb02d",
"assets/assets/icons/section.png": "72a7dee74e81fde3dd21d19e485a8e11",
"assets/assets/icons/selling.png": "4ab3f7dd80e5017d7a10606ec243e61e",
"assets/assets/icons/setting.png": "d225f79bb918f0d935b280cf7fa65131",
"assets/assets/icons/suppliers.png": "0db0f7ba17b2973607b6cd388558ea88",
"assets/assets/icons/tables.png": "9cbc9d7641da93f52342467bd6cdaedf",
"assets/assets/icons/taxs.png": "0b71517ee0acf206667c6b98e05650f1",
"assets/assets/icons/tv.png": "a970d2df55a5043925ff87902e44e2a7",
"assets/assets/icons/upload.png": "804b43dc7b0205898bc2d1ebcbd1b223",
"assets/assets/icons/users.png": "c0cdb1c22123b4580adec6c5a9d47c80",
"assets/assets/icons/visaIcon.png": "ea22b67efcbe605b2a6323b0de60e0c3",
"assets/assets/images/comming.png": "f2b4b6755a8414d4b53b2466b9839584",
"assets/assets/images/credit.png": "f79117906e1c75d5de89e518ee297778",
"assets/assets/images/intro1.png": "f244c2dd48edf62854a51d2b444a087d",
"assets/assets/images/intro2.png": "018c96330a0703c2216c6f9416571767",
"assets/assets/images/intro3.png": "5b56ed92af9aad24aaab5b8b985ab1d6",
"assets/assets/images/intro_domain.png": "4aa70e1b5252843aaa67b9697430975a",
"assets/assets/images/logo.png": "db6cfacafe96dfd2dc86e482f8090567",
"assets/assets/images/logow.png": "9d5e315d7f4282c820fc7a692129bf91",
"assets/assets/images/payment_way.png": "b284314765070e2b1876e6cafe61d10d",
"assets/assets/images/placeholder.png": "1632e46a5c79d43f3125ca62c54189cb",
"assets/assets/images/splash.png": "aab02c7ca44314b3d74010d4196afaf7",
"assets/assets/json/error.json": "3c1d8c607e04e0a61ea0c59634772566",
"assets/assets/json/loading.json": "262b43b891fdaac47c0990e657524c46",
"assets/assets/json/success.json": "0b5a8998140fac4a862e4ffce0036b26",
"assets/assets/translations/ar-EG.json": "ae4e44945dcebb851f389b2edd79beca",
"assets/assets/translations/en-US.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "5b9f6201490e64419caf3696da2577b3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7450c6e897f665d34a7e292af958c1a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad06a0e615a8e2244390f178faf6c706",
"/": "ad06a0e615a8e2244390f178faf6c706",
"main.dart.js": "99fbc0d07c84e0c883c4775f176c8d38",
"manifest.json": "6e27e11e874f9b4e90368f06df03916a",
"version.json": "5a2e5b23fe1e513d9ceff412295fc76b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
