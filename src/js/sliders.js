$(document).ready(function () {
    $("input[name=phone]").mask("+7 (000) 000-00-00");

    $(document).on('click', '.disabled', function (e) {
        e.preventDefault();
    });

    $(".slider").slick({
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: false,
        lazyLoad: 'ondemand',
    });


    // if ($(window).width() <= '995') {
    $(".application").slick({
        arrows: false,
        infinite: false,
        dots: false,
        slidesToShow: 8,
        lazyLoad: 'ondemand',
        nextArrow: '<a href="#" class="arrow next"></a>',
        prevArrow: '<a href="#" class="arrow prev"></a>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                arrows: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        },
        ]
    });

    $(".advantage").slick({
        arrows: false,
        infinite: false,
        dots: false,
        slidesToShow: 6,
        lazyLoad: 'ondemand',
        nextArrow: '<a href="#" class="arrow next"></a>',
        prevArrow: '<a href="#" class="arrow prev"></a>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        },
        ]
    });

    $(".slider-trust").slick({
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 4,
        appendArrows: '.news-arrow',
        lazyLoad: 'ondemand',
        nextArrow: '<a href="#" class="arrow next"></a>',
        prevArrow: '<a href="#" class="arrow prev"></a>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                appendArrows: '.slider-trust',
                arrows: true,
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                appendArrows: '.slider-trust',
                arrows: true,
            }
        },
        ]
    });

    $(".news-slider").slick({
        arrows: true,
        infinite: false,
        dots: false,
        slidesToShow: 4,
        appendArrows: '.news-arrow',
        lazyLoad: 'ondemand',
        nextArrow: '<a href="#" class="arrow next"></a>',
        prevArrow: '<a href="#" class="arrow prev"></a>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        ]
    });

    $(".slider-video").slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        ]
    });


    $(".slider-complect").slick({
        arrows: false,
        infinite: false,
        dots: false,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        },
        ]
    });


    $('.main-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-image-slider',
        nextArrow: '<a href="#" class="arrow next"></a>',
        prevArrow: '<a href="#" class="arrow prev"></a>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: true
            }
        }]
    });

    $('.small-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-image-slider',
        focusOnSelect: true,
        vertical: true,
        arrows: false,
    });
});