//Particles 
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#4ab5b9"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});









//burgermenu


const menu = document.querySelector('.menu');
const linksright = document.querySelector('.links_nav');
const links = document.querySelectorAll('.links_nav a');

menu.addEventListener('click', function() {
  this.classList.toggle('open');
  linksright.classList.toggle('center');
});

links.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('open');
    linksright.classList.remove('center');
  });
});

//loader

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



