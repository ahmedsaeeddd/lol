$(document).ready(function(){
    $(".slider").bxSlider();
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        if(sc > 60){
            $("header").css("background","#5e5675");
        }else{
            $("header").css("background","transparent");

        }
    });
    $(".navbar li a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
        scrollTop:$('#' + $(this).data('scroll')).offset().top
        },1000);
       
        });

    $(".icon1").click(function(){
        $(this).hide();
        $(".navbar").css("left","0");
        $(".icon2").show();
        $(".navbar").click(function(){
            $(this).css("left","100%");    
        });
    });
    $(".icon2").click(function(){
        $(".navbar ").css("left","100%");
        $(this).hide();
        $(".icon1").show();  
    });
    $(".button1").click(function(){
        $(".hidden").fadeIn(1000);
        $(".about img").css({
          height:'500px'
         });
        $(this).hide();
        $(".button2").show();
      });
      
      $(".button2").click(function(){
          $(".hidden").hide(700);
          $(".about img").css({
           height:'auto',
          });
          $(this).hide();
        $(".button1").show();
      });


});