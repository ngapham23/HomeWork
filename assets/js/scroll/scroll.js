$(document).ready(function() {
  $('.aps-nav__link').on('click', function(e) {
    var href = $(this).attr('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      $('.aps-nav__link').removeClass('aps-nav__link--active'); 
      $(this).addClass('aps-nav__link--active');              
      var target = $(href);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
      }
    }
  });
});