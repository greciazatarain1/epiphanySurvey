!(function(d){
  var itemClassName = "statement";
      items = d.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true; 
 
 function setInitialClasses() {

    // Target the last, initial, and next items and give them the relevant class.
    // This assumes there are three or more items.
    items[0].classList.add("active");
    items[1].classList.add("next");
  }
function moveNext() {
    var slider2 = document.querySelector('.slider-2');
    var statement = document.querySelector('.statement');


    statement.classList.remove('active');
    slider2.classList.add('active');
}

  // Initialise carousel
  function initCarousel() {
        setInitialClasses();

    // Set moving to false now that the carousel is ready
    moving = false;
  }

  // make it rain
  initCarousel();

}(document));