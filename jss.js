$(document).ready(function(){

    $(".wrapper > header > .top-bar > .con > .side-menu").click(function(){

        $(".wrapper > .side").addClass("active");
        $(".wrapper > .hidden-box").addClass("active");
        

    })
    $(".wrapper > .side > div > .top > .exit").click(function(){
        $(".wrapper > .side").removeClass("active");
        $(".wrapper > .hidden-box").removeClass("active");
    })
    $(".wrapper > .hidden-box").click(function(){
        $(".wrapper > .side").removeClass("active") ;
        $(".wrapper > .hidden-box").removeClass("active");
    })



    $(".wrapper > .scroll-down-top-bar > .con > .side-menu").click(function(){

        $(".wrapper > .side").addClass("active");
        $(".wrapper > .hidden-box").addClass("active");
        

    })
    $(".wrapper > .side > div > .top > .exit").click(function(){
        $(".wrapper > .side").removeClass("active");
        $(".wrapper > .hidden-box").removeClass("active");
    })
    $(".wrapper > .hidden-box").click(function(){
        $(".wrapper > .side").removeClass("active") ;
        $(".wrapper > .hidden-box").removeClass("active");
    })





    $(".section01 > .con > .menual > div ").click(function(){

        let num = $(this).index();
        $(".section01 > .con > .menual > div").addClass("active");
        $(".section01 > .con > .menual > div").eq(num).siblings().removeClass("active");
        
        $(".section01 > .con > .bar").addClass("active")
        $(".section01 > .con > .bar").eq(num).siblings().removeClass("active");
                


    })


      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 48,
        slidesPerGroup: 1,
        loop: true,
        autoplay: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });






      $("a").click(function(){
        return false; // return false : 모든 기능 차단
      });

    // 끝
})


$(window).scroll(function(){
    let scrollTop = $(this).scrollTop()
    
    if(scrollTop>=100){
      $(".scroll-down-top-bar").addClass("active")
    } else if(scrollTop < 300){
      $(".scroll-down-top-bar").removeClass("active")
    }
  })