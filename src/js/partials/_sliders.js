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

$('.slider-reviews.md').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: elements.prevArrowText,
    nextArrow: elements.nextArrowText,
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
$('.slider-reviews.xs').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: elements.prevArrowText,
    nextArrow: elements.nextArrowText
});