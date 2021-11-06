$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide up script 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    //toggke menu/navbar script
    $('.menu-btn').click(function () {
        $('navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["a Web Developer","a Content Creator","a YouTuber"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["a Web Developer","a Content Creator","a YouTuber"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});