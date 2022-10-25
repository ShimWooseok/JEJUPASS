$(document).ready(function(){

    $(".wrapper > header > .top-bar > .con > .side-menu").click(function(){

        $(".wrapper > .side").addClass("active")
        $(".wrapper > .hidden-box").addClass("active")
        

    })
    $(".wrapper > .side > div > .top > .exit").click(function(){
        $(".wrapper > .side").removeClass("active")    
        $(".wrapper > .hidden-box").removeClass("active")
    })
    $(".wrapper > .hidden-box").click(function(){
        $(".wrapper > .side").removeClass("active") 
        $(".wrapper > .hidden-box").removeClass("active")
    })

    // 끝
})