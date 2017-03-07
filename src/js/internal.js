(function($) {

    $('.icon-menu').on('click', function () {
       $('.mobile-menu').addClass('active');
       $('body').addClass('no-scroll');
    });
    $('.mobile-menu .icon-cross').on('click', function () {
       $('.mobile-menu').removeClass('active');
       $('body').removeClass('no-scroll');
    });

})(jQuery);