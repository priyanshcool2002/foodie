(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            $(this).scrollTop() > 55 
                ? $('.fixed-top').addClass('shadow') 
                : $('.fixed-top').removeClass('shadow');
        } else {
            $(this).scrollTop() > 55 
                ? $('.fixed-top').addClass('shadow').css('top', -55) 
                : $('.fixed-top').removeClass('shadow').css('top', 0);
        }
    });

    // Back to top button
    $(window).scroll(function () {
        $(this).scrollTop() > 300 
            ? $('.back-to-top').fadeIn('slow') 
            : $('.back-to-top').fadeOut('slow');
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonial carousel (Customer reviews)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{ items:1 },
            768:{ items:1 },
            992:{ items:2 },
            1200:{ items:2 }
        }
    });

    // Restaurant carousel (Featured restaurants)
    $(".restaurant-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{ items:1 },
            768:{ items:2 },
            992:{ items:3 },
            1200:{ items:4 }
        }
    });

    // Modal Video (Promo / How It Works)
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function () {
            $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        });

        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', $videoSrc);
        });
    });

    // Product Quantity (Cart & Checkout)
    $('.quantity button').on('click', function () {
        var button = $(this);
        var input = button.parent().parent().find('input');
        var oldValue = parseInt(input.val());
        var newVal = button.hasClass('btn-plus') ? oldValue + 1 : Math.max(oldValue - 1, 0);
        input.val(newVal);
    });

})(jQuery);
