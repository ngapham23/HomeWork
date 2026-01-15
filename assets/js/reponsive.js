      
$(document).ready(function() {
    const $mobileToggle = $('.aps-mobile-toggle');
    const $nav = $('.aps-nav');
    const $body = $('body');
    const $navLinks = $('.aps-nav__link');

    $mobileToggle.on('click', function(e) {
        e.stopPropagation();
        $nav.toggleClass('active');
        
      
        if ($nav.hasClass('active')) {
            $body.css('overflow', 'hidden');
        } else {
            $body.css('overflow', '');
        }
    });


    $navLinks.on('click', function() {
        $nav.removeClass('active');
        $body.css('overflow', '');
    });

    $nav.on('click', function(e) {
        if ($(e.target).is('.aps-nav')) {
            $nav.removeClass('active');
            $body.css('overflow', '');
        }
    });

   
    $(document).on('click', function(e) {
        if (!$nav.is(e.target) && $nav.has(e.target).length === 0 && 
            !$mobileToggle.is(e.target) && $mobileToggle.has(e.target).length === 0) {
            $nav.removeClass('active');
            $body.css('overflow', '');
        }
    });
});