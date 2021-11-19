import LocomotiveScroll from 'locomotive-scroll';

window.onscroll = function () {
  progressBarScroll();
};

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.07
});

$(document).ready(function(){
  $('.carousel').carousel();
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
});

$(document).ready(function() {
      $(".hamburger").click(function() {
        $(".container-menu").toggle();
      });
  });

