$(function() {
    "use strict"

    $('.carousel').carousel({
      interval: 6000,
      pause: "false"
    });

    var topoffset = 50;
    $('body').scrollspy({
            target: 'header .navbar',
            offset: topoffset
    });

    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
        $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        var hash = $(this).find('li.active a').attr('href');
        if(hash !== '#featured') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    });

    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset+2
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// help with scrolling to full portfolio entries when intro is clicked
function scrollToAnchor(aid){
var aTag = $("a[name='"+ aid +"']");
$('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('.portfolio-tn-valley-ent').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-tn-valley-ent').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-tn-valley-ent');
});

$('.portfolio-shoals-paws').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-shoals-paws').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-shoals-paws');
});

$('.portfolio-boosting-others').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-boosting-others').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-boosting-others');
});

$('.portfolio-muscle-shoals-artists').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-muscle-shoals-artists').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-muscle-shoals-artists');
});

$('.portfolio-cox-creek-family-dentistry').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-cox-creek-family-dentistry').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-cox-creek-family-dentistry');
});

$('.portfolio-your-success-insight').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-your-success-insight').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-your-success-insight');
});

$('.portfolio-germantown-speech-language').on('click', function(e) {
    $('.full-portfolio').css ( "display", "none");
    $('#full-portfolio-germantown-speech-language').css ( "display", "block" );
    $('.full-portfolio').css ( "border-top", "80px solid #262262" );
    scrollToAnchor('full-portfolio-germantown-speech-language');
});
