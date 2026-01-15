
$(document).ready(function() {
    const searchPopup = $('.aps-search-popup');
    const searchInput = $('.aps-search-popup__input');
    const searchBtn = $('.aps-icon-btn--search');
    const closeBtn = $('.aps-search-popup__close');
    const overlay = $('.aps-search-popup__overlay');


    searchBtn.on('click', function(e) {
        e.preventDefault();
        searchPopup.fadeIn(300).addClass('active');
        $('body').css('overflow', 'hidden'); 
        setTimeout(function() {
            searchInput.focus();
        }, 100);
    });


    function closeSearchPopup() {
        searchPopup.fadeOut(300).removeClass('active');
        $('body').css('overflow', 'auto'); 
        searchInput.val(''); 
    }
    closeBtn.on('click', closeSearchPopup);
    overlay.on('click', closeSearchPopup);

    // $(document).on('keyup', function(e) {
    //     if (e.which === 27 && searchPopup.hasClass('active')) {
    //         closeSearchPopup();
    //     }
    // });


    // $('.aps-search-popup__form').on('submit', function(e) {
    //     e.preventDefault();
    //     const query = searchInput.val().trim();
        
    //     if (query.length > 0) {
    //         console.log('Searching for:', query);

    //         alert('Searching for: ' + query);
    //     } else {
    //         searchInput.focus();
    //     }
    // });

    //    $('.aps-search-tag').on('click', function() {
    //     const tagText = $(this).text();
    //     searchInput.val(tagText).focus();
    // });
});