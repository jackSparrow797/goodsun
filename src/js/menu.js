$(document).ready(function () {

    // $("img.lazyload").lazyLoadXT();

    $(document).on('click', '.menu-mobile-toggle', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $(target).slideToggle("slow");
        $(this).toggleClass('open');
    });
    let mobileClick = function () {
        if ($(window).width() <= '995') {
            menuOpen(".menu .submenu-open")
        }
    };

    let menuOpen = function (target) {
        $(document).on("click", target, function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            $(this).next().slideToggle("slow");
        });
    };

    $(document).on("click", ".faq-item a", function (e) {
        e.preventDefault();
        $(this).find('.text').toggleClass('d-none');
        $(this).find('.faq-arrow').toggleClass('close');
        $(this).parent().find('p').slideToggle("slow");
    });

    $(document).on("click", ".card-tabs-link a", function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('.card-tabs-link li').removeClass('active');
        $(this).parent().addClass('active');
        $('.card-tab').removeClass('active');
        $(target).addClass('active');
    });

    $(document).on("click", ".order-by-phone", function (e) {
        e.preventDefault();
        $(this).next().removeClass('d-none');
        $(this).remove();
    });

    $(document).on("click", ".filter-to-open", function (e) {
        e.preventDefault();
        $(".filter-to-open").toggleClass('d-none');
        $('.filters-outer').slideToggle("slow");

    });

    menuOpen('.menu-left .submenu-open');
    menuOpen('#catalog-filters .level1 a');
    menuOpen('.character-block a');
    mobileClick();


    $(".to_up").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    window.onscroll = function () {
        var scrolled = window.pageYOffset;
        if (scrolled > 100) {
            $('.to_up').fadeIn("slow")
        } else {
            $('.to_up').fadeOut("slow")
        }
    };



});

const Blazy = require('blazy');
var bLazy = new Blazy();