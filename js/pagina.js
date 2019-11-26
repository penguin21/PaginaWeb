//Cargar Menu(navbar)
$(function() {
	"use strict";
    $(".menu").load("navbar.html");
});

//Cargar el pie de pagina
$(function() {
	"use strict";
    $(".pie").load("pie.html");
});

$(window).on("scroll", function() {
  "use strict";
	var currentPos = $(window).scrollTop();

  $('.nav li a').each(function() {
    var sectionLink = $(this);
    // capture the height of the navbar
    var navHeight = $('#nav-wrapper').outerHeight() + 1;
    var section = $(sectionLink.attr('href'));

    // subtract the navbar height from the top of the section
    if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
      $('.nav li').removeClass('active');
      sectionLink.parent().addClass('active');
    } else {
      sectionLink.parent().removeClass('active');
    }
  });        
});