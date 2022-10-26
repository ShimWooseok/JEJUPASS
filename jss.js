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





    $(".section01 > .con > .menual > div > img").click(function(){

        let num = $(this).index();
        $(".section01 > .con > .menual > div > img").addClass("active");
        $(".section01 > .con > .menual > div > img").eq(num).siblings().removeClass("active");
        


    })

    // 끝
})


$(window).scroll(function(){
    let scrollTop = $(this).scrollTop()
    
    if(scrollTop>=200){
      $(".scroll-down-top-bar").addClass("active")
    } else if(scrollTop < 200){
      $(".scroll-down-top-bar").removeClass("active")
    }
  })