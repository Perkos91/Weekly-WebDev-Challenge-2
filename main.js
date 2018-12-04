/*....Toogle Menu....*/

const toogleMenu = document.querySelector(".menu-toogle");
const menuNav = document.querySelector(".main-nav");
const nav = document.querySelector('nav');

toogleMenu.addEventListener('click', function () {
    menuNav.classList.toggle('active');
    nav.classList.toggle('active');
})

/*....Services button....*/
$('.btn__one').on('click', function () {
    $('.wrapper__one').slideToggle('active');
})
$('.btn__two').on('click', function () {
    $('.wrapper__two').slideToggle('active');
})
$('.btn__three').on('click', function () {
    $('.wrapper__three').slideToggle('active');
})
$('.btn__four').on('click', function () {
    $('.wrapper__four').slideToggle('active');
})

/*....Add active class to the current link in position....*/
$(document).ready(function () {
    $('a[href*=\\#]').bind('click', function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        console.log(target);
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600);
        return false;
    });
});


$(window).scroll(function () {
    let scrollDistance = $(window).scrollTop();
    /*...Assign active class to navl links...*/
    if (window.innerWidth >= 1024) {
        $('header, section, footer').each(function (i) {
            if (($(this).offset().top + $('.main-nav').outerHeight() - (1)) <= scrollDistance) {
                $('.nav-link.active').removeClass('active');
                $('.nav-link').eq(i).addClass('active');
            }
        })
    };
}).scroll();

/*...Add active class to nav...*/
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $('nav').addClass('active')
    } else {
        $('nav').removeClass('active')
    }
});