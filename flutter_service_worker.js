'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dd1efac62048ee6cc7d2de8e2931bd36",
"index.html": "49ff61230f516ff5b61110c2156fb6bc",
"/": "49ff61230f516ff5b61110c2156fb6bc",
"main.dart.js": "79604d2759ffba463433ce09f97574b3",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ce371c05f4c246f8d9ba7f68c0bf047",
"assets/AssetManifest.json": "152cc7d1e209ebf741556b18514bf047",
"assets/NOTICES": "b36dca407ce00faa47a1239b36a906ca",
"assets/FontManifest.json": "52d990a8f227bc55ae71c7170e07d1b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/im_restaurant.png": "6a6520d18f5ea56513d4aa01be88a12e",
"assets/assets/images/illustration.png": "1e6a2073d884fe68fd1021b818c42951",
"assets/assets/images/im_background.png": "74875137ee06aaf2beccd0b774abcc75",
"assets/assets/images/im_chiken.png": "b905ef2201e30d56d1bfe08cd8645449",
"assets/assets/images/im_ramen.png": "9c27b188ce789d9adb6a664bbd73567f",
"assets/assets/images/im_healthy.png": "7f5c2d9d14f9a23648dd991790ca7525",
"assets/assets/images/im_indonesia_flag.png": "39a593f159879a51e9ac13ae0c46178b",
"assets/assets/images/im_pizza.png": "0893f73a32c8e3a29251cee587a73468",
"assets/assets/images/im_asian.png": "81696bb6161d1b96cd0efe8d97aa7b3d",
"assets/assets/images/im_burger.png": "6597870c752440996517906e1f193d45",
"assets/assets/images/card_payment.png": "ff6bd12e9312f53f6541918f28663710",
"assets/assets/images/im_user.png": "17069757b68f511db85986b000d04faf",
"assets/assets/illustrations/ill_notification.svg": "e87758c50ff61d96167d94651026132d",
"assets/assets/illustrations/ill_rider.svg": "9c0685029dd2f9ce5233715c9eb0be8a",
"assets/assets/illustrations/ill_share.svg": "6e64fd4c2fd8a119c9bf2acc5be23de0",
"assets/assets/illustrations/ill_people.svg": "6b731eea739f6ea01ef734e51bf1df3a",
"assets/assets/illustrations/ill_main.svg": "bccc500803543d04740084ff4b555949",
"assets/assets/icons/ic_shuffle_play.svg": "0e26042511ee619f7a0682f1ad0b3b47",
"assets/assets/icons/ic_phone.svg": "c4f9d5a4ca79170c977cc6c76ae7010e",
"assets/assets/icons/ic_key.svg": "437d0e3e463590bc8eefdb75ed358e24",
"assets/assets/icons/ic_clock.svg": "45793909a26a79945c9eafcfdc4c81d9",
"assets/assets/icons/ic_filter.svg": "138cb9d7bf55dbf66949f2c704ce50c0",
"assets/assets/icons/ic_arrow_down_right.svg": "8f2f8146038e8e1cf5b931cb313b487e",
"assets/assets/icons/ic_mail.svg": "cacbb856278e1342a65817138d987954",
"assets/assets/icons/ic_share.svg": "f4a98939294ac0e11f96830b466209d5",
"assets/assets/icons/ic_session_leave.svg": "e2efe2fab289867494fd1cbbaaece903",
"assets/assets/icons/ic_twitter.svg": "36016a77c742f50746d64a75dbbe3d61",
"assets/assets/icons/ic_equalizer.svg": "c101a167f08a4819188858602d3d3fd3",
"assets/assets/icons/ic_text_strikethrough.svg": "4ee08a1183e3c0376b744456ad49c0a8",
"assets/assets/icons/ic_align_center.svg": "7729fa018c7635c0372e9ef7ab712b3b",
"assets/assets/icons/ic_arrow_up_circle.svg": "48823ffa1c5d148435f1dd1a40be884b",
"assets/assets/icons/ic_mobile.svg": "62fec65d778498a529ea6172d43a3ab1",
"assets/assets/icons/ic_link.svg": "c6844c5d8a8093d8b549cdd75f1fa191",
"assets/assets/icons/ic_money.svg": "cffda851e0ea6267a69048224806ac40",
"assets/assets/icons/ic_video.svg": "2f36b43f058852681ea0b69125d58014",
"assets/assets/icons/ic_facebook.svg": "e5ec2fba70b2a75a7347610a566c43ec",
"assets/assets/icons/ic_blocked.svg": "23f839dfeabf8cd642a36dbe4871a59a",
"assets/assets/icons/ic_sketch.svg": "b4df57074d7ed1ed837c61ea191e6bc3",
"assets/assets/icons/ic_visa_card.svg": "22b5a5d9e7472e4b41cb79f690f29382",
"assets/assets/icons/ic_lock.svg": "f8a3fb12f1da15176e817f8ddae43738",
"assets/assets/icons/ic_info.svg": "a1584b5390b42bde3c529113901ddca3",
"assets/assets/icons/ic_hamburger_menu.svg": "cd7553d4e60d0ebae56df4171d8e7510",
"assets/assets/icons/ic_pause.svg": "254e80a81a1f9f9c47e0108bb966f372",
"assets/assets/icons/ic_layout.svg": "dc66a867d300d93dc796d05dd7f0ce94",
"assets/assets/icons/ic_basket.svg": "a1c785c561a4376ca78fe154e3469ce7",
"assets/assets/icons/ic_folder.svg": "7e17ee3d313728d22792d8cfb58d5574",
"assets/assets/icons/ic_plus.svg": "5665a42928720e59846769ca25f868e4",
"assets/assets/icons/ic_file_audio.svg": "2294f3e80719ce431b45dfc288cc43ee",
"assets/assets/icons/ic_users.svg": "1f763672342965a4198a9e7c6ac8b246",
"assets/assets/icons/ic_minus.svg": "af53e71c8d87d62c9f4e99cde4b2c325",
"assets/assets/icons/ic_stop.svg": "dade1abc0d16cbe28ada81845776b40f",
"assets/assets/icons/ic_credit_card.svg": "703f9e2e974b95784c7356d545f9e603",
"assets/assets/icons/ic_stats.svg": "7af18134025b0bc96ee57d787217fc0f",
"assets/assets/icons/ic_apple.svg": "7b6a252a740642f65d00bcf6b5545640",
"assets/assets/icons/ic_lightning_bolt.svg": "a1faa2cb63c11e2d4b2bdbc7fe9990d4",
"assets/assets/icons/ic_text_italic.svg": "54cdbcc11c00c2ae939a9ba338480478",
"assets/assets/icons/ic_bell.svg": "36fc6eee0d749d727220033dfb3c711c",
"assets/assets/icons/ic_heart.svg": "87234d2ab4b13da405c4dbd7a9bcf80a",
"assets/assets/icons/ic_file_svg.svg": "075082f615382b6704cef021472a8c06",
"assets/assets/icons/ic_file_video.svg": "d89a424a3c8b4bfb1f8dfe42f34eac74",
"assets/assets/icons/ic_dribbble.svg": "3d14b856b84a10d3b1f7a8d6f761288c",
"assets/assets/icons/ic_shop.svg": "dbb7498bc700bb6ce3c0756f65dca545",
"assets/assets/icons/ic_home.svg": "2e8a52b15170ad8c116c0ddb6a616a8f",
"assets/assets/icons/ic_volume_off.svg": "6446eaa214919ab05d7f130d25366bb4",
"assets/assets/icons/ic_camera.svg": "61997c9c8ae08e334d789abeaaa63c6d",
"assets/assets/icons/ic_check_circle.svg": "5042405e1987ae1cf199cb74beca26e9",
"assets/assets/icons/ic_close.svg": "f90ba771ed58b57cace18b8fc9e2590f",
"assets/assets/icons/ic_user.svg": "f00b373a2c12dd598670f9ba421848bf",
"assets/assets/icons/ic_image.svg": "dd85857d4e694c3c5985508143054ac9",
"assets/assets/icons/ic_message.svg": "7eafb495fb5e3cb0bd6b342bae904422",
"assets/assets/icons/ic_align_left.svg": "a5bc452796b1518efd173d077ca4a117",
"assets/assets/icons/ic_arrow_right_circle.svg": "95bf3bb8a07e1a674a153f5f7ce489f4",
"assets/assets/icons/ic_arrow_up_right.svg": "feb70c701e744fe70f39edde2d30ca24",
"assets/assets/icons/ic_file_png.svg": "9b5dfdcb8b201d075915b0616ace243f",
"assets/assets/icons/ic_reload.svg": "1f686fd624bf75d45a828b9bc8638e8f",
"assets/assets/icons/ic_list.svg": "684bc9500aec87ac04b199fd355bce5a",
"assets/assets/icons/ic_headphones.svg": "dabc55d1e37b9e8c1c2c11d3efba5cdd",
"assets/assets/icons/ic_calendar.svg": "7962bc7555d0c6a61290d7f8693ae56b",
"assets/assets/icons/ic_grid.svg": "1ae671b512a11cb1249450f82a9cdf2d",
"assets/assets/icons/ic_meatballs_menu.svg": "26ee03b9f35e4e74d1e24bf1dd684ec7",
"assets/assets/icons/ic_tag.svg": "ee6ff11a9cd0f54a0604138a113dee0d",
"assets/assets/icons/ic_align_justify.svg": "92c39db70e06f8bcabca40347c2ae5a4",
"assets/assets/icons/ic_map_pin.svg": "182210570d2d76ecc1a6b4e2b38ff929",
"assets/assets/icons/ic_source.svg": "1bddca54d0fa2ddbb8e050ee45ac8f03",
"assets/assets/icons/ic_arrow_left.svg": "47905138968dad4d9fa3c1c54b5eea0d",
"assets/assets/icons/ic_browser.svg": "79f10f3aa2581ddf151bacb1948c707e",
"assets/assets/icons/ic_list_numbered.svg": "39132598e1b91d4c7177413fc5923a25",
"assets/assets/icons/ic_file_new.svg": "870461146b4617e30ff375bf43afa2e4",
"assets/assets/icons/ic_trash.svg": "740ff6d51e67217c2895502e7f3b5da0",
"assets/assets/icons/ic_arrow_left_circle.svg": "4a944269f958b305c720fb00ce064c26",
"assets/assets/icons/ic_bookmark.svg": "50ac8c5041cb95accda093487754c2bb",
"assets/assets/icons/ic_crop.svg": "451ed43c653b5341d6481bbe76a31c61",
"assets/assets/icons/ic_repeat_play.svg": "4533513fccbaefbf97716a7bc26e51da",
"assets/assets/icons/ic_arrow_right.svg": "6c5eda50ba95846aa5702f8625c61c56",
"assets/assets/icons/ic_file_jpg.svg": "dc59ae7d42cad21b5f0d405807cdf1bc",
"assets/assets/icons/ic_text_bold.svg": "7bebbbba4c5e3ac0a116fe83105f95b8",
"assets/assets/icons/ic_analytics.svg": "28fa03667bbb38799aab6a90a6db55ca",
"assets/assets/icons/ic_session_join.svg": "291c9111a8199202e1b72c6adf912f28",
"assets/assets/icons/ic_chevron_down.svg": "f637998b783d9bb5a2f73ec210204209",
"assets/assets/icons/ic_shopping_bag2.svg": "43f7e65dd3a5efe41f72932b56d7b57b",
"assets/assets/icons/ic_adjustment.svg": "184c35fbdf7507537629ba84861b0901",
"assets/assets/icons/ic_google.svg": "3ef838005f4e81256ee57f1cd3778d02",
"assets/assets/icons/ic_eye.svg": "9cda7421755efc944157d0777fbe9e43",
"assets/assets/icons/ic_desktop.svg": "5f0b0b168b78c7b44e1579c025780b0e",
"assets/assets/icons/ic_attachment.svg": "1dd4e2e778863a0a4f66f22b31a07f6b",
"assets/assets/icons/ic_scissors.svg": "7cfb1a39a2ee253af0fd9db4b00be866",
"assets/assets/icons/ic_streaming.svg": "81674867fca815e27e5c160b568321e9",
"assets/assets/icons/ic_transfer.svg": "448bad677610bb5bf7bb6003d092d778",
"assets/assets/icons/ic_text_underline.svg": "24267e5f0d73f506dbd3ba2c8c7e2254",
"assets/assets/icons/ic_tags.svg": "0f63dd76818333aaf8d954a454fd4872",
"assets/assets/icons/ic_gift.svg": "32ae0e71b226fe49ffaceaef15b41566",
"assets/assets/icons/ic_download3.svg": "e46b264816a758d6446f40d0f7bf96c2",
"assets/assets/icons/ic_thumbs_up.svg": "fe76314c4107cafe776e37d62d8a66d9",
"assets/assets/icons/ic_volume_minus.svg": "899a831e08f511121b98be9b771ba04c",
"assets/assets/icons/ic_download2.svg": "c035ad185a8376520831c77d45d388d6",
"assets/assets/icons/ic_font_color.svg": "9a3554e028ae3417c24525229c641c28",
"assets/assets/icons/ic_close_circle.svg": "af7106176457cb5d652a9808205ac392",
"assets/assets/icons/ic_overview.svg": "017085aab54e616f35108ce674aca55f",
"assets/assets/icons/ic_upload2.svg": "d814770b37c871f3e3eabe1167c03ba2",
"assets/assets/icons/ic_chevron_left.svg": "f924970218c55570af98a5a1b87e5b67",
"assets/assets/icons/ic_achievements.svg": "b17a0e13bba771008b0ca39b94d27126",
"assets/assets/icons/ic_upload3.svg": "610c87798351323773352043012dee65",
"assets/assets/icons/ic_chevron_up.svg": "79b0f246b8f1996ab48b37c5e208d920",
"assets/assets/icons/ic_kebab_menu.svg": "feaa8a319af823cbda421458cbcdbf54",
"assets/assets/icons/ic_check.svg": "0a0c55888bb209085368f70259c753a0",
"assets/assets/icons/ic_arrow_down_left.svg": "7826262ca9483e1ff0058bb153a48cbd",
"assets/assets/icons/ic_upload1.svg": "f22f3507c4f1ad72eb9272613b9227cf",
"assets/assets/icons/ic_add_stroke.svg": "084addea8f5445b713a2441810317e6e",
"assets/assets/icons/ic_arrow_down.svg": "fd766f11532dcceeec61662e22da7175",
"assets/assets/icons/ic_align_right.svg": "9dfb48512ce6213110ca7d87a697b469",
"assets/assets/icons/ic_comments.svg": "7857d4844c3d6f671ecea6492a156545",
"assets/assets/icons/ic_share_ios.svg": "4a779b987bba39cb6498d09e800b4ed3",
"assets/assets/icons/ic_help.svg": "a5bea5d2c534a96f665b448947999c1d",
"assets/assets/icons/ic_shopping_cart.svg": "d1e7e006aa0b9056ab5aa952d6729f6a",
"assets/assets/icons/ic_figma.svg": "156e27e26df1910679fe17997821993a",
"assets/assets/icons/ic_circle.svg": "5fc204dd2a9a273703f8737357ce4721",
"assets/assets/icons/ic_send.svg": "89ffca2e76510a18ff66a20abad970b5",
"assets/assets/icons/ic_arrow_down_circle.svg": "aea9fb25bdc82e8099fb81b6a995e221",
"assets/assets/icons/ic_bullet_list.svg": "64c0412d311e79e8865ee360b8b65b11",
"assets/assets/icons/ic_file_generic.svg": "226bebc0f765f065855387fe5f2fa7fb",
"assets/assets/icons/ic_play.svg": "b558955bef8a88bae8e34f3c9ff0cfd5",
"assets/assets/icons/ic_volume_plus.svg": "7174357c7648a3a0f3d9b05a1ebcc827",
"assets/assets/icons/ic_mic.svg": "7dfd505da1143c851877cddf4f73538a",
"assets/assets/icons/ic_sound.svg": "5c3be304db667ddd19e5bae6c6cc8ae9",
"assets/assets/icons/ic_dashboard.svg": "3b974c28a90e973ac3935334d14bcf27",
"assets/assets/icons/ic_download.svg": "3c570b26a4aea9b58fc8c8af93589721",
"assets/assets/icons/ic_chevron_right.svg": "ad926328398240d04e85e902e803e5fd",
"assets/assets/icons/ic_prev.svg": "5a4457ec45d55edb281f850d93455aa1",
"assets/assets/icons/ic_settings.svg": "f9746984296bc89324b9db7e108d58ec",
"assets/assets/icons/ic_thumbs_down.svg": "7a3f46d0d1e74ed46c681ed7213e3d06",
"assets/assets/icons/ic_master_card.svg": "3bb8ddc0afb3833df950e1fba5897635",
"assets/assets/icons/ic_search.svg": "dc862f4ddd464baa46d866e7fc1b8284",
"assets/assets/icons/ic_shopping_bag.svg": "1f62a247bd9eea743a54a928b4426fdf",
"assets/assets/icons/ic_external_link.svg": "31ac53e912afd841f2694d592dcb3c38",
"assets/assets/icons/ic_alert.svg": "62045e2c093fbb7a4b35bdd26480e012",
"assets/assets/icons/ic_party.svg": "532f1fb3cd4bd2cc1d79e57495e788c5",
"assets/assets/icons/ic_arrow_up_left.svg": "2c5e995e81fb9133a1c2e734bc0847d7",
"assets/assets/icons/ic_arrow_up.svg": "1251f34d3ba8d0f2a6d03cc5c824899a",
"assets/assets/icons/ic_next.svg": "d44107f5ec49d606571d7b28720d5637",
"assets/assets/icons/ic_playlist.svg": "de61cb0d0c347712047011c4ecaf55ce",
"assets/assets/icons/ic_gem.svg": "5a06250a9c5cd6b2eb56ee3496789764",
"assets/assets/icons/ic_edit.svg": "a2736c9e94553771338c30bd267e23ff",
"assets/assets/icons/ic_star.svg": "305475e375daaf4b99e3f88119a9d649",
"assets/assets/icons/ic_file_code.svg": "6f7247995a57da7c6c2adbac782b2a00",
"assets/assets/fonts/Quicksand-Bold.ttf": "517b4a8fa3577cc7066e9bcfebe4beff",
"assets/assets/fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/assets/fonts/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "60683c595c4de500713906b9ccf1e2ab",
"assets/assets/fonts/Quicksand-Light.ttf": "34d0d3091e4f3de26ff0f2c4a4f6bfb7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
