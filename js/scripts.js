/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; 
  

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  

    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
    $(document).keydown(function (event) {
      if (event.keyCode == 123) { //evitar  F12 
        document.querySelector('#page-top').scrollIntoView({
          behavior: 'smooth'
        });
        document.getElementById("nome").innerHTML="F12? Really?" 
        document.getElementById("skills").innerHTML="Cyber Security - Student - Pentest"    
          return false;
      } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // evitar Ctrl+Shift+I
        document.querySelector('#page-top').scrollIntoView({
          behavior: 'smooth'
        });
        document.getElementById("nome").innerHTML="Ohhhhhhhh you really close!"
        document.getElementById("skills").innerHTML="Really - Really - Close"

          return false;
      }
      document.addEventListener('contextmenu', event => event.preventDefault()); //Evitar o clike do lado direito
  });
  // ctrl + u evitado
document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
        document.querySelector('#page-top').scrollIntoView({
          behavior: 'smooth'
        });
         document.getElementById("nome").innerHTML="Someone is trying to view the source code :)"
         document.getElementById("skills").innerHTML="Cyber Security - Student - Pentest"
      return false;
  } else {
      return true;
  }
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});
  

    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  

    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  

    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);
  

    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery);
  