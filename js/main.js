(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        rtl: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-right"></i>',
            '<i class="bi bi-chevron-left"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// 
new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    rootMargin: '0px 0px -40%',
});

// About Video
const button = document.querySelector('.btn-play');
const videoModal = document.querySelector('#videoModal');
const videoIframe = videoModal.querySelector('iframe');

button.addEventListener('click', function() {
    const videoSrc = this.getAttribute('data-src');
    videoIframe.setAttribute('src', videoSrc);
    videoModal.classList.add('show');
});

videoModal.addEventListener('hide.bs.modal', function() {
    videoIframe.setAttribute('src', '');
    videoModal.classList.remove('show');
});

// Project Modal

const openModalBtns = document.querySelectorAll('.openModalBtn');

openModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
    const targetModalId = this.getAttribute('data-bs-target');
    const targetModal = new bootstrap.Modal(document.querySelector(targetModalId));
    
    targetModal.show();
    });
});

   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
    });


