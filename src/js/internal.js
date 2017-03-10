(function($) {

    var grid = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    };
    var elements = {
        mobileMenu: $('.mobile-menu'),
        moreBlock: $('.more-block'),
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

    $('.smooth-link').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
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

    $('[data-more]').on('click', function (e) {
        var el = $(this).attr('href');
        e.preventDefault();

        $(this).text(function(i, text){
            return text === 'Показать все' ? 'Скрыть' : 'Показать все';
        });
        $(el).slideToggle();
    });

    $('.filter-toggle').on('click', function () {
        $('.filter').addClass('active');
        $('.photo-wallpapers').addClass('active');
    });
    $('.filter .icon-cross').on('click', function () {
        $('.filter').removeClass('active');
        $('.photo-wallpapers').removeClass('active');
    });

    $('.catalog-tools').find('.btn').on('click', function (e) {
       if($(this).hasClass('active')) {
           return false;
       } else {
           e.preventDefault();
           $('.catalog-tools').find('.btn').removeClass('active');
           $(this).addClass('active');
       }
    });
    $('[data-toggle="popup"]').on('click', function (e) {
        var el = $(this).attr('href');
        e.preventDefault();

        $(el).addClass('in');
    });

    $(document).mouseup(function (e){
        var el = $('#load_image');
        if (!el.is(e.target)
            && el.has(e.target).length === 0) {
            el.removeClass('in');
            $('.catalog-tools').find('.btn').addClass('active').not(':first-child').removeClass('active');
        }
    });

})(jQuery);