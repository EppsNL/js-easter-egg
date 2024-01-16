// Based on https://github.com/WeiChiaChang/easter-egg-collection as released under MIT license
function eggKonamicode () {
  "use strict";
  var key = [38,38,40,40,37,39,37,39,66,65]; // Konami code
  var ck = 0;
  var max = key.length;
  var eggKonamicode = function() {
    console.log("No extra lives?!")
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
      eggKonamicode();
      ck = 0;
    }
  };
  var init = function(data) {
    document.addEventListener('keyup', record);
  };
  var data = 'https://abunaicon.nl/wp-content/uploads/2023/02/kitsuneconfused.webp'
  init(data);
}
 
function eggRamiel () {
  "use strict";
  var key = [87,72,79,73,83,66,69,83,84,87,65,73,70,85]; // whoisbestwaifu
  var ck = 0;
  var max = key.length;
  var eggRamiel = function() {
		console.log("SCREAMS GEOMETRICALLY")
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
      eggRamiel();
      ck = 0;
    }
  };
  var init = function(data) {
    document.addEventListener('keyup', record);
  };
  var data = "https://abunaicon.nl/wp-content/uploads/2023/02/ramiel.png"
  init(data)
}
function eggRei () {
  "use strict";
  var key = [84,69,72,82,69,73]; //tehrei
  var ck = 0;
  var max = key.length;
  var eggRei = function() {
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
      eggRei();
      ck = 0;
    }
  };
  var init = function(data) {
    document.addEventListener('keyup', record);
  };
  var data = 'https://abunaicon.nl/wp-content/uploads/2023/02/rei.webp'
  init(data);
}
eggKonamicode()
eggRamiel()
eggRei()