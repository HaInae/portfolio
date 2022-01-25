
//버튼 클릭시 맨위로 올라가기
$(document).ready(function(){
    $('.up').click(function(){
         $('html, body').stop().animate({scrollTop:0},1000,'swing');
        }
    )

    $(window).scroll(function(){
        if(scrollY==200){
            $('.se2 a').addClass('down_se2')
        }
        else if(scrollY==800){
            $('.se3 .title').addClass('down')
        }
        else if(scrollY==1300){
            $('.se4 .wrap').addClass('down')
        }
        else if(scrollY==1800){
            $('.se4-1>p').addClass('down')
        }
    })
})

