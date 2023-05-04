// Based on https://github.com/WeiChiaChang/easter-egg-collection as released under MIT license
// konamicode - kitsune (beyond stars intro vid confusion)
// thewired - Lain
// bestwaifu - Ramiel
// uselessgoddess - Aqua
// wakuwaku - Anya spy fam
// mommymisato - Misato fullscreen
// tehrei - Rei
// kingofthemonsters - Godzilla
// zeghettoverwoord - Sailor Moon
// pipirupirupirupipirupi - Dokuro-chan
// watashiwagundam - nethergundam
// truckkun - https://giphy.com/stickers/truck-isekai-time-qkn1XFk6qYv6YQVr58
// dotheimpossible
// seetheinvisible
// 177013 - shin chan no
// zone-tan - zone smirk
// camelbycamel - Ankha zone dance sfw
// desudesu - suiseiseki desu
// kevinwashere - taiyaki https://giphy.com/stickers/munch-yakiyaki-yaki-QvSkfNV9Nl5uHZC009

function konamicode () {
  "use strict";

  // type the konami code on your keyboard
  var key = [38,38,40,40,37,39,37,39,66,65];
  var ck = 0;
  var max = key.length;

  var konamicode = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '50%';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = '25%';
    img.style.top = '-100%';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.top = '100px';
    },30);

    window.setTimeout(function(){
      img.style.top = '100%';
    }, 3800);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 4800);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      konamicode();
      ck = 0;
    }

  };

  var init = function(data) {
    document.addEventListener('keyup', record);
  };

  var data = 'https://abunaicon.nl/wp-content/uploads/2023/02/kitsuneconfused.webp'

  init(data);
}
 

function ramiel () {
  "use strict";

  // Hint: the one question all otaku's fight over, without spaces...
  var key = [87,72,79,73,83,66,69,83,84,87,65,73,70,85];
  var ck = 0;
  var max = key.length;

  var ramiel = function() {

    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.height = '50%';
    img.style.transition = '15s all';
    img.style.position = 'fixed';
    img.style.right = '-50%';
    img.style.bottom = 'calc(50% - 25%)';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.right = 'calc(100% + 50%)';
    }, 50);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 15000);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      ramiel();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "https://abunaicon.nl/wp-content/uploads/2023/02/ramiel.png"

  init(data)
}

function tehrei () {
  "use strict";
  var key = [84,69,72,82,69,73];
  var ck = 0;
  var max = key.length;

  var tehrei = function() {

	console.log("OMG IT'S TEH REI!")
    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.height = '80%';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(25%)';
    img.style.top = '-100%';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.top = '10%';
    },500);

    window.setTimeout(function(){
      img.style.top = '100%';
    }, 5300);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 6400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      tehrei();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = 'https://abunaicon.nl/wp-content/uploads/2023/02/rei.webp'

  init(data);

}

konamicode()
ramiel()
tehrei()