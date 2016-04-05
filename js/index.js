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
            console.log(mainSwiper.activeIndex);
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
                    $("#bfs").animate({opacity:"0"},1500);
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
                    $("#bfs").animate({opacity:"0"},1500);
                };
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

