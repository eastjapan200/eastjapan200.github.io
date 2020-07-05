var fadeconts = document.querySelectorAll('.fadeconts');
var fadecontsRect = [];
var fadecontsTop = [];
var windowY = window.pageYOffset;
var windowH = window.innerHeight;
var remainder = 100;


for (var i = 0; i < fadeconts.length; i++) {
  fadecontsRect.push(fadeconts[i].getBoundingClientRect());
}
for (var i = 0; i < fadecontsRect.length; i++) {
  fadecontsTop.push(fadecontsRect[i].top + windowY);
}


window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});


window.addEventListener('scroll', function () {

  windowY = window.pageYOffset;

  for (var i = 0; i < fadeconts.length; i++) {

    if(windowY > fadecontsTop[i] - windowH + remainder) {

      fadeconts[i].classList.add('show');
    } else {

      fadeconts[i].classList.remove('show');
    }
  }
});
