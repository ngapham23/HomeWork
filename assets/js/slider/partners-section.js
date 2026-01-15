// Partners Section Slider
$(document).ready(function() {
    $('.aps-partners__logos').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 6, 
        autoplay: false,
        arrows: false,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        cssEase: 'ease-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});