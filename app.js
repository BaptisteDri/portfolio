var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            $('.swiper-slide-active .news__item').addClass('active');

            $('.item-bg').addClass('active');

        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
    $('.item-bg').addClass('active');

});


$(document).ready(function(){
    $('nav li').css('border-top', 'solid 2px rgba(255, 255, 255, 0)');
    $('.home-link').parent('li').css('border-top', 'solid 2px rgba(255, 255, 255, 1)');
    $('nav li a').click(function(){
        $('nav li').css('border-top', 'solid 2px rgba(255, 255, 255, 0)');
        $(this).parent('li').css('border-top', 'solid 2px rgba(255, 255, 255, 1)');
    });

    $('.home-link').click(function(){
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    });
    $('.portfolio-link').click(function(){
        document.querySelector('#portfolio .wrapper').scrollIntoView({ behavior: 'smooth' });
    });
    $('.exp-link').click(function(){
        document.querySelector('#scrollToTimeline').scrollIntoView({ behavior: 'smooth' });
    });
    $('.skills-link').click(function(){
        document.querySelector('#scrollToSkills').scrollIntoView({ behavior: 'smooth' });
    });
    $('.contact-link').click(function(){
        document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
        $('nav li').css('border-top', 'solid 2px rgba(255, 255, 255, 0)');
        $('.contact-link').parent('li').css('border-top', 'solid 2px rgba(255, 255, 255, 1)');
    });

    var flagShadow = false;
    $(window).scroll(function() {
        if(0 != window.scrollY){
            $('nav').css('box-shadow', 'rgba(0, 0, 0, 0.2) 0px 10px 50px 10px');
        }else{
            $('nav').css('box-shadow', 'none');
        }
      });
});