/*Made By: Yuna 2015*/
var screenWidth,screenHeight;
var foodSwiper,mainSwiper,showed;
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
        watchSlidesProgress : true,
        onInit: function(mainSwiper){
            swiperAnimateCache(mainSwiper);
            //swiperAnimate(mainSwiper);
        }, 

        onProgress: function(mainSwiper, progress){
            for (var i = 0; i < mainSwiper.slides.length; i++){
            var slide = mainSwiper.slides[i];
            es = slide.style;
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'rotate('+360*slide.progress+'deg)';
                    }
            //console.log(mainSwiper.activeIndex);
            switch(mainSwiper.activeIndex){
                case 1:
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href= "css/network.css";
                document.getElementsByTagName('head')[0].appendChild(link);
                break;
                case 3:
                if(!showed){
                    starry();
                    showed = 1;
                    $("#starrysky").animate({opacity:"1"},4000);
                };
                break;
            }
        },

        onSlideChangeEnd: function(mainSwiper){ 
            //console.log(mainSwiper.activeIndex);
            switch(mainSwiper.activeIndex){
                case 1:
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href= "css/network.css";
                document.getElementsByTagName('head')[0].appendChild(link);
                break;
                case 3:
                if(!showed){
                    starry();
                    showed = 1;
                    $("#starrysky").animate({opacity:"1"},4000);
                };
                break;
            }
            swiperAnimate(mainSwiper);
            //$("#loading").hide();
        },
        onTransitionEnd: function(mainSwiper){ 
            swiperAnimate(mainSwiper);
            //$("#loading").hide();
        }
    });
    /*$("#music_switch").click(function(){
        var status = $("#music_switch").css("background-position-x") == "100%" ? true : false;
        var music = $(".music")[0];
        if(status){
            music.pause();
            $("#music_switch").css("background-position", "left");
        }else{
            music.play();
            $("#music_switch").css("background-position", "right");
        }
    })*/
    $(".arrow").click(function(){
        mainSwiper.slideNext();
    })
});
window.onload = function(){
    resizer();
    $("#loading").hide();
    document.getElementById('music').play();
    console.log('%c如果你有看源码的习惯，并且你是一个萝莉，请联系384813529@qq.com','color:#ff0000;background:#e5e5e5');
    console.log('%c如果你有看源码的习惯，但是你并不是一个萝莉，请联系513742616@qq.com','color:#0000F6;background:#e5e5e5');
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

