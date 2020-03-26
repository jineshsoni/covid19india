'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c50c0b3e74a02f13a60893e026beef65",
".git/config": "5a376235bd1e416d6a3c3691ca4a9505",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "264b1d199aa77ae9e113f2b2a81d8b78",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe6d56b51c4ad5bfe1ce75b72a6d0a3b",
".git/logs/refs/heads/master": "fe6d56b51c4ad5bfe1ce75b72a6d0a3b",
".git/logs/refs/remotes/origin/master": "6e9922d92fc8cf9513f5243672359394",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/e673063d91a353eb23ffaa0a0ed987d0a9e29e": "b80beadc69d3b314d4d5769476324bde",
".git/objects/08/1782f3f431f43f2278b1d7123a4b47467d1c42": "f58a8cd12c252c2a954ccf155ffac636",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/5f6cfc3302cb9e95971d865ad7beb192f20883": "975bb1d294e9cf9dcae570abf4aa7a6d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/d199032fb5b608fca2a5311d86fdd822699996": "8b1a5591f0205a28224e0610b9a8c408",
".git/objects/34/5c362206493189e8208ebda7db4e47681ad1b6": "2ea41e0b16d7f38410771e2f6e2fbb76",
".git/objects/45/8ebceef7c3f400fae9e1d335e1c404e95cdfbe": "327d3682b28b1a7b32372d50479f1832",
".git/objects/69/0090dd9ffb894dd3eb8c77f88ecb221c0a857c": "a31724b28409c095ff16606970e9e662",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/0c81a1f99769ffdbbd4b12c1d843eb05f05e9c": "7c5050b45d24749c034623c4fb8e7b41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a4/c4a07f4481be453029f94d651ba4c93e9b0f49": "768f0f5c89338131e74907fb509285a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "331be2633bd3975595b1029aa1b9be4e",
".git/refs/remotes/origin/master": "331be2633bd3975595b1029aa1b9be4e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "bc03619d5e5fd3cef09e936007e7e0f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1127736a413c0600c01eda77f96c8aae",
"main.dart.js": "a5233948cef7c418f2f98fc247ed90b0",
"manifest.json": "31fc6f8db44669bb4a0fb26352819ba4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
