$(document).ready(function () {

  $(".wrapper > header > .top-bar > .con > .side-menu").click(function () {

    $(".wrapper > .side").addClass("active");
    $(".wrapper > .hidden-box").addClass("active");


  })
  $(".wrapper > .side > div > .top > .exit").click(function () {
    $(".wrapper > .side").removeClass("active");
    $(".wrapper > .hidden-box").removeClass("active");
  })
  $(".wrapper > .hidden-box").click(function () {
    $(".wrapper > .side").removeClass("active");
    $(".wrapper > .hidden-box").removeClass("active");
  })



  $(".wrapper > .scroll-down-top-bar > .con > .side-menu").click(function () {

    $(".wrapper > .side").addClass("active");
    $(".wrapper > .hidden-box").addClass("active");


  })
  $(".wrapper > .side > div > .top > .exit").click(function () {
    $(".wrapper > .side").removeClass("active");
    $(".wrapper > .hidden-box").removeClass("active");
  })
  $(".wrapper > .hidden-box").click(function () {
    $(".wrapper > .side").removeClass("active");
    $(".wrapper > .hidden-box").removeClass("active");
  })





  $(".section01 > .con > .menual > div ").click(function () {

    let num = $(this).index();
    $(".section01 > .con > .menual > div").addClass("active");
    $(".section01 > .con > .menual > div").eq(num).siblings().removeClass("active");

    $(".section01 > .con > .bar").addClass("active")
    $(".section01 > .con > .bar").eq(num).siblings().removeClass("active");



  })


  function SwiperBox1__init() {



    var swiper01 = new Swiper(".swiper-box1 .mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      autoplay: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-box1 .swiper-button-next",
        prevEl: ".swiper-box1 .swiper-button-prev",
      },
    });

  }
  SwiperBox1__init();

  function SwiperBox2__init() {



    var swiper02 = new Swiper(".swiper-box2 .mySwiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      autoplay : true,
      loop: true,
        // centeredSlides : true,
      loopFillGroupWithBlank: true,
      // slidesPerView: 2,
      // autoplay : true,
      // loop : true,
      // effect: "cube",
      // grabCursor: true,
      // cubeEffect: {
      //   shadow: true,
      //   slideShadows: false,
      //   shadowOffset: false,
      //   shadowScale: 0,
      // },
      pagination: {
        el: ".swiper-box2 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-box2 .swiper-button-next",
        prevEl: ".swiper-box2 .swiper-button-prev",
      },
    });

  }
  SwiperBox2__init();




  $("a").click(function () {
    return false; // return false : 모든 기능 차단
  });

  // 끝
})


$(window).scroll(function () {
  let scrollTop = $(this).scrollTop()

  if (scrollTop >= 100) {
    $(".scroll-down-top-bar").addClass("active")
  } else if (scrollTop < 300) {
    $(".scroll-down-top-bar").removeClass("active")
  }
})