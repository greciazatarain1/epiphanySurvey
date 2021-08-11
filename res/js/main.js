
!(function(d){
  /*Variables*/
  var itemClassName = "statement";
      items = d.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true; 

 function setInitialClasses() {
    // Initial Class
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  //Set click events to options
  function setEventListeners() {
    var option1 = d.getElementsByClassName('option-1')[0];
    option1.addEventListener('click', moveNext);
    var option2 = d.getElementsByClassName('option-2')[0];
    option2.addEventListener('click', moveNext);
    var option3 = d.getElementsByClassName('option-3')[0];
    option3.addEventListener('click', moveNext);
  }




  function moveCarouselTo(slide){
   
    if(!moving) {

      // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
      var newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 2,
          oldNext = slide + 2;

      // Test if carousel has more than three items
      if ((totalItems - 1) > 4) {

        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }

        // Check if current slide is at the beginning or end and sets slide numbers
        if (slide === 0) {
          var option1 = d.getElementsByClassName('option-1')[0];
          option1.removeEventListener('click', moveNext);
          var option2 = d.getElementsByClassName('option-2')[0];
          option2.removeEventListener('click', moveNext);
          var option3 = d.getElementsByClassName('option-3')[0];
          option3.removeEventListener('click', moveNext);

          var done = d.getElementsByClassName('done')[0];
          done.classList.add('hide');

          var done = d.getElementsByClassName('done')[0];
          done.classList.add('hide');
          var thanks = d.getElementsByClassName('thanks')[0];
          thanks.classList.add('visible');


        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }

        // Based on the current slide, reset to default classes.
     
        items[oldNext].className = itemClassName;

        // Add the new classes
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
 

}

  function moveNext() {
    // Check if moving
    if (!moving) {

      // If it's the last slide, reset to 0, else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  // Initialise carousel
  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    //Set moving to false 
    moving = false;
  }

  //Run Carousel
  initCarousel();

}(document));



