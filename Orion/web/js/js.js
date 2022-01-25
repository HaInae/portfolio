



$(document).ready(function(){    
    
    window.onscroll=function(){   
        
         if( scrollY>=160) {
            $('nav').css("position","fixed").css({top:"0",
            background:"#e3051a"})
            $('.nav_ul>li>a').css('color','#fff')
            $('nav').css("z-index","2")

           
            $('.sub_ul').css("border","2px,solid,#e3051a")
            
            $('ul.sub_ul > li > a').css({color:'#fff',
          background:'#e3051a'})
            $('.nav_ul>li span').css('background','#e3051a')
 
          }
          //위로 갔을 때 
          else{
            $('nav').css("position","relative")
            .css("background-color","#fff")

            $('ul.nav_ul > li > a').css({color:'#555',
          background:"fff"})
          $('ul.sub_ul > li > a').css({color:'#555',
          background:'#fff'})
            $('nav').css('backgrond','#fff')
            $('.nav_ul>li span').css('background','#fff')
            
          } 
        } 


        
        
    let val=0 ;

    $('nav').click(function(){
      if(val==0){
        $('.nav_b>img').attr('src','./image/icon/x_button.png')
        $('.sub_ul').css('display','flex')
        $('.nav_ul').css('display','none') 
        val+=1;
        
      }
      else{
        $('.nav_b>img').attr('src','./image/icon/menu_B.png')
        $('.sub_ul').css('display','none')
        $('.nav_ul').css('display','flex')
        val=0; 
      }  
    })


    $('.se2').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
      

    $('.se3_ar').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.se4_ar').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.se4_art1 > h3').hover(function(){
        $('.se4_art1 >p').stop().slideDown('normal','swing')   
      },function(){
        $('.se4_art1 >p').stop().slideUp('normal','swing')
      })
      $('.se4_art2 > h3').hover(function(){
        $('.se4_art2 >p').stop().slideDown('normal','swing')   
      },function(){
        $('.se4_art2 >p').stop().slideUp('normal','swing')
      })
      $('.se4_art3 > h3').hover(function(){
        $('.se4_art3 >p').stop().slideDown('normal','swing')   
      },function(){
        $('.se4_art3 >p').stop().slideUp('normal','swing')
      })

      $('.se5_ar').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 910,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });

      


      $('.fam').click(function(){
        $('.fam_option').toggle()
      })
      $('.fam_option a').hover(function(){
        $(this).css('color','#000')},function(){
          $(this).css('color','#555')
        }
      )
    
})