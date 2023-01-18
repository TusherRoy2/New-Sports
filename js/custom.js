$(document).ready(function ($) {
    'use strict'
    // code start
    $('header .head-icon i').on('click', function(){
        $('header nav').show(1000)
    });

    $('header .head-icon i').on('dblclick', function(){
        $('header nav').hide(1000)
    });

    $(window).resize(function (){
        let screenSize = $(window).width();

        if (screenSize > 768){
            $('header nav').removeAttr('style');
        }
    });
    

    // wow js
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();





})