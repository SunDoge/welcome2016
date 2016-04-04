/*Made By: Yuna 2015*/
var screenWidth,screenHeight;
var foodSwiper,mainSwiper;
$(function(){
    screenHeight = $("body").height();
    screenWidth = $("body").width();
    $(window).resize(function(){
        screenHeight = $("body").height();
        screenWidth = $("body").width();
        resizer();
    })        
    mainSwiper = new Swiper('#main', {
        keyboardControl: true,
        mousewheelControl: true,
        direction: 'vertical',
        onInit: function(mainSwiper){
            swiperAnimateCache(mainSwiper);
            //swiperAnimate(mainSwiper);
        }, 
        onSlideChangeEnd: function(mainSwiper){ 
            console.log(mainSwiper.activeIndex);
            switch(mainSwiper.activeIndex){
                case 1:
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href= "css/network.css";
                document.getElementsByTagName('head')[0].appendChild(link);
                break;
                case 3:
                starry();
                break;
            }
            swiperAnimate(mainSwiper);
            $("#loading").hide();
        },
        onTransitionEnd: function(mainSwiper){ 
            swiperAnimate(mainSwiper);
            $("#loading").hide();
        }
    });
    $(".arrow").click(function(){
        mainSwiper.slideNext();
    })
});
window.onload = function(){
    resizer();
    $("#loading").hide();
    // var music = $("#music")[0];
    // music.currentTime = 2;
    // music.play();
    setTimeout("swiperAnimate(mainSwiper)",1000);
}
function resizer(){
    var height;
    $(".centerBlock").each(function(){
        height = $(this).height();            
        $(this).css("margin-top",(screenHeight-height)/3 + "px");
    })
    var arrowWidth = $(".arrow").width();
    var containerWidth = $(".swiper-container").width();
    $(".arrow").css("left",(containerWidth-arrowWidth)/2);
}
