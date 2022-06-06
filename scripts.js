$(document).ready(function() {

  // Fixed nav on scroll
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 84) {
      $('header').addClass('nav-fixed');
      $('.learn-more').fadeOut();
    } else {
      $('header').removeClass('nav-fixed');

    }
  });

  $('.smooth-scroll').on('click',function (e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top - 84
    }, 750);
  });

});
