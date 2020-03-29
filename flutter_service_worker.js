'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1c39a152579b003771fbe5c867281e36",
".git/config": "75b5ee10cad8704848313d7aa5208ed7",
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
".git/index": "15e452d6f481d72c8bf6a57b5817881e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "473e1ccab4173d4703ebfb9359a821fd",
".git/logs/refs/heads/master": "473e1ccab4173d4703ebfb9359a821fd",
".git/logs/refs/remotes/origin/HEAD": "bb03223df7414124af46ae9ce5df5601",
".git/logs/refs/remotes/origin/master": "4156e83c643093eb5d4a6d942a4d03a1",
".git/objects/03/1b943830906acebc180e1edb1d59ee304a900c": "d6ea4a93b4c70a9fc032d519074145e9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/e673063d91a353eb23ffaa0a0ed987d0a9e29e": "b80beadc69d3b314d4d5769476324bde",
".git/objects/08/1782f3f431f43f2278b1d7123a4b47467d1c42": "f58a8cd12c252c2a954ccf155ffac636",
".git/objects/0c/459f45fb745b5850114353e012713030b750d2": "1093f1bacbeaae87c5408987247a0d65",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/5f6cfc3302cb9e95971d865ad7beb192f20883": "975bb1d294e9cf9dcae570abf4aa7a6d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/e0666de22b2f9e5aac8592c0452e0cbdbdf78b": "2ce226cbeebd48038e58286eb4c0574f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/3cb9ce1c3c149e745a63c065bbf05ac9f3dca2": "70d94c8f4c22713b5eadbf1dec6c31ea",
".git/objects/26/d199032fb5b608fca2a5311d86fdd822699996": "8b1a5591f0205a28224e0610b9a8c408",
".git/objects/26/ee325ca89b11bdec1f88375a31bcd15e99a154": "c2b6be7ddf8b866f4c607672af0a8a87",
".git/objects/29/164461b5b68d4a81a868e2d097e5227d118dc8": "66cedf922fee177d42ba882014d60fdf",
".git/objects/29/3a1b47cc4a41f72c10da5107e19ca48a0f65c2": "3be7d8f8b5c95ecac4289c850bfdf92b",
".git/objects/29/802e2afb6b4306fe4a8dbbc8151f45bfc79aca": "04e297875ff55c49fd0780fa382b093a",
".git/objects/29/f78b84eb28e6c595abb55d85e8f93d84a4b0ca": "1469cf31a5b77ea131cd2da75d386a04",
".git/objects/32/ae5e2a9609c805c308295910e6b3c18a3811de": "ec3551b2e1f573fbe3c83923f7aed0c1",
".git/objects/34/5c362206493189e8208ebda7db4e47681ad1b6": "2ea41e0b16d7f38410771e2f6e2fbb76",
".git/objects/34/d50241bb87a47ee178e4ed12efd6a8b605f077": "95666fb88f620fdad058ebe338777b9e",
".git/objects/38/f18103c7bbd1a40b288027286b3771a71e7180": "e311d3096219ef432c0ea7076c6c4a44",
".git/objects/3f/96426ccc94df8fa80d954b5275772566e64337": "b3f60cc09f55d38cb7f22d7f28c00158",
".git/objects/45/8ebceef7c3f400fae9e1d335e1c404e95cdfbe": "327d3682b28b1a7b32372d50479f1832",
".git/objects/49/86b02c40f7e81e48780ddd2003a3119deed48d": "2f0b5a9a201d9e1d8b116091004f4d23",
".git/objects/5e/6f1eb84a8daa58ae4dedded3350ecfd47105e8": "1bbf06e4fb59acff52238370c9f3bff5",
".git/objects/63/7486963ab5f06fe02f3679367c3f01bdfc09d5": "6a695b208198eb25431db4dfff4188ba",
".git/objects/63/9aa8e6466758b5f43dafe635ced82b55bd7700": "1d123cf077f22d31b4add6f82e109d86",
".git/objects/65/56de5a612e4fd4af121aab1e22dc3594e6bc35": "a76dfa0500f6af2e70e1fe3c0b17c9d3",
".git/objects/69/0090dd9ffb894dd3eb8c77f88ecb221c0a857c": "a31724b28409c095ff16606970e9e662",
".git/objects/77/a65e8dfe2cee7f11cb5ae332f2c9afa75ad862": "6f847dd8aa7dfe38b1af2e0ca9122294",
".git/objects/7d/25d9d125836dce81e2b5250245b6d070b88208": "ec89df4c368cf5808bed988bc3a73345",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/0c81a1f99769ffdbbd4b12c1d843eb05f05e9c": "7c5050b45d24749c034623c4fb8e7b41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/05c7e0406f290939fbf18a100a376876fac036": "eb134925148cd157eb73a0f53ac5e7fe",
".git/objects/91/2061a807cee0aded181a0db358b920dd689308": "50687a6a2b63e7c1d15ffb5f3b2583a6",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9c/8018127dcd9effc53e898f7be10122accc9347": "c7d7f58b06d5d1323da398ac5b0f4a89",
".git/objects/a2/1ad60354496fce64d0340cac2acf68cf3d4e67": "06bb5d4a0a0c61556828993eedfc9608",
".git/objects/a2/4b1ec1e32925891772632ee1172e215ee89ff0": "3f8465d91b0156a94c18240ca1839ebb",
".git/objects/a3/fd1857e9b84b8b5f1c33d104e944d0d4c550ea": "de7e5d1495a976859b2bd3f1ebb484f9",
".git/objects/a4/27189c9727041a26780108c6ba9084a87914e3": "5784d6d065b6aea893a85699e7d5317d",
".git/objects/a4/c4a07f4481be453029f94d651ba4c93e9b0f49": "768f0f5c89338131e74907fb509285a0",
".git/objects/a5/c8b5345bf6c1718427560ccb2ca6eae849c310": "fa745d4b894827088fb2d8f6ceb61d65",
".git/objects/a9/a1a8fac10e371127b5ea4255ca89c5f554dfc4": "220d4e95883d81c1803c0ca1f883b1b9",
".git/objects/ac/954746a75eca9a784e6bd982b5c23cfd238c06": "e58769e5948a531d5f0a0d9e3d290488",
".git/objects/af/eac235e6be87733365a8e9e468b279388e3df8": "dec4dd34c3b4b1beff41fcd07f77aec0",
".git/objects/b6/758d608adc62df520150aaaedcd50fd83a7429": "fab16355df31a66c748a4a108dc4be03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/7465821d6716f0b97c6f06e1a5c84a528c7366": "2e83e6a488be0023fd71881a707da793",
".git/objects/c8/936031c06df246a467f6b30c73a7d362a1cd73": "c6aa4766e304998b564f1e4fcf1cd8c7",
".git/objects/d0/20a8910dd2243d54446642a61e1e7425e6ad74": "b795b0fb92759a2b5e38e3e3b848867e",
".git/objects/d0/de338953b1999ea742e04244e995591f1c813e": "d6591b784b1755229473e05d28de6e76",
".git/objects/d4/8a6f501a97196b7fc55834afcc32710f4aa71d": "e40f0a3aacd29357f987472c9202a2d5",
".git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "25d32b664bf24efcd42423f8fdd688a3",
".git/objects/d5/883315b6155308077af58661f8d7fd64bdfa6c": "c79a0d4946215e24d95816ec44cdf69c",
".git/objects/d7/83fe2f0051e8a1a7ae0916d8d435017073a7fe": "8a6425ee2f4630a5517701d0e305255f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/c8a6c4309777264a927658fad8ecc5629af250": "b1a322829399c45d9c92b8544ac8d46f",
".git/objects/e3/0fe37487d69d25c597bfe069ec639ec1e0a09e": "a7763d47297b6f31c7b3e5ccdf2dd6cf",
".git/objects/e3/c3b94bcd525b9ed0a72c757b09073d01c1338d": "058414a44b1cc8c054c41331b7b3e040",
".git/objects/fa/69f9ac671293854c059332af7232205359d3d0": "f6ec2643aa2fad503f1de6833a031df4",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/5550be3b034320cb588ec94a99e3217e4bc40c": "aaf5b181be80c8adb4d24ebb0aaf6570",
".git/packed-refs": "396ba8350d36998c310edf7605249ca5",
".git/refs/heads/master": "d57de2ec570a86a93c4843a433e69763",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d57de2ec570a86a93c4843a433e69763",
"assets/AssetManifest.json": "d01720fdb8f6af15cdb92bde9435ba64",
"assets/assets/india.svg": "3b29ba8cf912c939e4a54239c93d7b6a",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "79d25f4601cae229b9e9858da2210706",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "cccc1bb63757d776cd27a5b393e47344",
"icons/icon-192.png": "2e88bcb41f6aae32a349d266af2c40b4",
"icons/Icon-512.png": "1bb04703c694acbe067b4b539075538a",
"index.html": "1127736a413c0600c01eda77f96c8aae",
"main.dart.js": "46962e5ff8a898fb3e972efa6f9c60bd",
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
