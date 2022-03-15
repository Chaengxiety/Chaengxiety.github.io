$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
})
     var typed = new Typed(".Blue", {
         strings: ["Computer Engineering Student"],
         typeSpeed: 100,
         backspeed: 6,
         loop: true
});

var typed = new Typed(".paragraph", {
    strings: ["I am 21 yrs. old that lives at Urdaneta City, Pangasinan, and my hobbies include playing games, watching shows, and playing basketball or cycling. I am currently interested in game development, web development, and also currently exploring other ways to further develop my skills in programming. I have basic knowledge in C++, java, and python, while currently learning about javascript, html, and CSS, and I am still open to learn more from others that can help further my knowledge on my chosen field"],
    typeSpeed: 50,
    backspeed: 6,
    loop: true
});




