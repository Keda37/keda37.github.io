function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    doScrolling(coordY, 700);    
  });
});