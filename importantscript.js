// Based on https://weichiachang.github.io/easter-eggs-mobile as released under MIT license
function importantscript () {
  "use strict";

  // Hint: the one question all otaku's fight over, without spaces...
  var key = [87,72,79,73,83,66,69,83,84,87,65,73,70,85];
  var ck = 0;
  var max = key.length;

  var importantscript = function() {

    console.log("Kevin has summoned best waifu!")
    var shock = document.createElement('div');
    var img = new Image();
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '250px';
    img.style.height = '250px';
    img.style.transition = '15s all';
    img.style.position = 'fixed';
    img.style.right = '-250px';
    img.style.bottom = '25px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.right = 'calc(100% + 500px)';
    }, 50);

    // window.setTimeout(function(){
    //   img.style.right = 'calc(100% + 375px)';
    // }, 4500);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 20000);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      importantscript();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = "https://www.epps.nl/wp-content/uploads/2023/02/ramiel.png"

  init(data)
}

function veryimportantscript () {
  "use strict";

  // That one cheat code...
  var key = [38,38,40,40,37,39,37,39,66,65];
  var ck = 0;
  var max = key.length;

  var veryimportantscript = function() {

	console.log("OMG IT'S TEH REI!")
    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '240px';
    img.style.height = '220px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 120px)';
    img.style.bottom = '-220px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '100px';
    },500);

    window.setTimeout(function(){
      img.style.bottom = '-250px';
    }, 3300);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 5400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      veryimportantscript();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = 'https://epps.nl/rei.webp'

  init(data);

}

importantscript()
veryimportantscript()
