// Featured Section Slider
$(document).ready(function() {
    const $slider = $('.aps-cards-inner');
    const $cards = $('.aps_card');
    
    if ($cards.length === 0) return;
    
  
    $slider.slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 15,
         edgeFriction: 0.35,
        cssEase: 'ease-out',
        variableWidth: true, 
        centerMode: false,
        adaptiveHeight: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    });


    $slider.on('init reInit', function() {
      
        $('.aps_card').css({
            'margin-right': '30px',
            'margin-left': '0'
        });
        
       
        $('.aps_card:last-child').css('margin-right', '0');
    });


    $slider.slick('getSlick');


    let currentSlide = 0;
    const totalSlides = $cards.length;
    const maxSlide = Math.max(0, totalSlides - 3);


    $('.aps-dot-circle, .aps-dot-inner').on('click', function(e) {
        e.stopPropagation();
        const slideIndex = parseInt($(this).data('slide'));
        if (!isNaN(slideIndex) && slideIndex <= maxSlide) {
            currentSlide = slideIndex;
            $slider.slick('slickGoTo', currentSlide);
            updateDots();
        }
    });

 
    $slider.on('afterChange', function(event, slick, currentSlideIndex) {
        currentSlide = currentSlideIndex;
        updateDots();
    });

    function updateDots() {
        $('.aps-dot-circle').attr('r', '3.5');
        $('.aps-dot-inner').attr('opacity', '0');
        
        $(`.aps-dot-circle[data-slide="${currentSlide}"]`).attr('r', '9.5');
        $(`.aps-dot-inner[data-slide="${currentSlide}"]`).attr('opacity', '1');
    }


    updateDots();
});
