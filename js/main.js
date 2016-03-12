$(document).ready(function() {
    showHome();

    var stopScroll = true;

    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();
        var topServices = $("#services").offset().top - ($("#services").outerHeight()/3);
        //var topAboutDown = $(".aboutDown").offset().top - ($(".aboutDown").outerHeight()+$(".aboutDown").outerHeight()/3);
        var scrollTo = null

        if(scroll > 99){showAbout();}else{showHome();}
        if(scroll > topServices){showServices();}
        //if(scroll > topAboutDown){showAbout2();}
    });

    $(document).bind('mousewheel DOMMouseScroll',function(e){
        var scroll = $(window).scrollTop();
        if (!(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) && stopScroll == true){
            setTimeout(blockScroll,650)
            if(scroll != 0){
                return false;
            }
        }
    });

    function showHome(){
        stopScroll = true;
        setTimeout(function(){$("#homeLogo").removeClass('opacity0').addClass('opacity1');}, 150); 
        $("#home").removeClass('home2').addClass('home1');
    }

    function showAbout(){
        $("#about .aboutUp .profileImage").removeClass('rotate0').addClass('rotate1');
        $("#home").removeClass('home1').addClass('home2');
        setTimeout(function(){$(".aboutUp").removeClass('opacity0').addClass('opacity1');}, 350);
        
        $('.aboutUp .opacity0').each(function(i){
            var p = $(this);
            setTimeout(function(){
                p.removeClass('opacity0').addClass('opacity1');
            }, i*200);
        });
    }

//    function showAbout2(){
//        $(".aboutDown").removeClass('opacity0').addClass('opacity1'); 
//    }

    function showServices(){
        $('.serviceLogo').each(function(i){
            var serviceLogo = $(this);
            setTimeout(function(){
                serviceLogo.removeClass('serviceLogo1').addClass('serviceLogo2');
            }, i*120);
        });

        $('.service ul').each(function(i){
            $('li').each(function(j){
                var li = $(this);
                setTimeout(function(){
                    li.removeClass('opacity0').addClass('opacity1');
                }, j*60);
            });
        });

        $('.service h4').each(function(i){
            var h4 = $(this);
            setTimeout(function(){
                h4.removeClass('opacity0').addClass('opacity1');
            }, i*120);
        });
        
        $('.serviceLogo .icon').each(function(i){
            var icon = $(this);
            setTimeout(function(){
                icon.removeClass('icon1').addClass('icon2');
            }, i*120+200);
        });

        $("#services h3").removeClass('opacity0').addClass('opacity1');
    }

    function blockScroll(){
        stopScroll = false;
    }
});