const menu = document.querySelector('.menu');
const linksright = document.querySelector('.links_nav')

menu.addEventListener('click', function() {
  this.classList.toggle('open');
  linksright.classList.toggle('center')
});


//loader

 //loader wrapper
 window.addEventListener('load', function() {
    var loader = document.getElementById('loader_wrapper');
    setTimeout(function() {
      loader.classList.add('fade');
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000); 
    }, 2700);
  });
  
  
  //navbar scroll

  var halfWindow = window.innerHeight / 10;

  var lastScroll = 0;
  var headerNav = document.querySelector("nav");
  var linksnav = document.querySelectorAll('.links_nav')
  
  window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;
    if(scrolled >= halfWindow) {
      headerNav.classList.add('active');
     
     
    } else {
      headerNav.classList.remove('active');
    
    }
    lastScroll = scrolled;
  });

//appearable section

window.addEventListener('load', function() {
  var appearableElements = document.getElementsByClassName('appearable');
  var delay = 500; // milliseconds between each element appearance
  var distance = 20; // pixels to move from left to right

  Array.from(appearableElements).forEach(function(element, index) {
    setTimeout(function() {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, index * delay);
  });
});



