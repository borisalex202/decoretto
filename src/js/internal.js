(function($) {

    var grid = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    };
    var elements = {
        mobileMenu: $('.mobile-menu'),
        prevArrow:'<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>'
    };
    var options = {
        documentWidth: $(document).width()
    };

    $(window).resize(function () {
        options.documentWidth = $(document).width();

        if(options.documentWidth >= grid.sm) {
            elements.mobileMenu.removeClass('active');
            $('body').removeClass('no-scroll');
        }
    });

    $('.icon-menu').on('click', function () {
        elements.mobileMenu.addClass('active');
        if(options.documentWidth < grid.sm) {
            $('body').addClass('no-scroll');
        }
    });
    elements.mobileMenu.find('.icon-cross').on('click', function () {
        elements.mobileMenu.removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.slider-advantage').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        prevArrow: elements.prevArrow,
        nextArrow: elements.nextArrow,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})(jQuery);