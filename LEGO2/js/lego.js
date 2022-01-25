$(document).ready(function(){
    let photos =
    ['<a href="#"><img src="./img/legotime/Layer 38.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 39.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 40.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 41.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 42.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 43.jpg" alt="photo"></a>',
    '<a href="#"><img src="./img/legotime/Layer 44.jpg" alt="photo"></a>']
    let num=0;
    $('.se5 .left').click(function(){
      if(num<=photos.length-2){
          $('.photo_box').empty();  
          num+=1;
          $('.photo_box').append(photos[num]);  
      }
      else {
          num=0;
          $('.photo_box').empty();  
          $('.photo_box').append(photos[num]);
      }
    })   

    $('.se5 .right').click(function(){
      if(num>1 || num==1){
          $('.photo_box').empty();  
          num-=1;
          $('.photo_box').append(photos[num]);  
      }
      else {
          num=photos.length-1;
          $('.photo_box').empty();  
          $('.photo_box').append(photos[num]);
      }
    })

    $(window).scroll(function(){
        if(scrollY>200 && scrollY<1500){
            $('.se2-1>div:first-child').addClass('up1')
            $('.se2-1>div:last-child').addClass('up1dur')
        }
        if(scrollY>1500 && scrollY<2000){
            $('.se2-2>div:first-child').addClass('up1')
            $('.se2-2>div:last-child').addClass('up1dur')
        }
        if(scrollY>2000 && scrollY<2800){
            $('.se3-1>div:first-child').addClass('up1')
            $('.se3-1>div:last-child').addClass('up1dur')
        }
        if(scrollY>2800){
            $('.se3-2>div:first-child').addClass('up1')
            $('.se3-2>div:last-child').addClass('up1dur')
        }
        if(scrollY>3870){
            $('.se2-1>div:first-child').removeAttr('class')
            $('.se2-1>div:last-child').removeAttr('class')
            $('.se2-2>div:first-child').removeAttr('class')
            $('.se2-2>div:last-child').removeAttr('class')
            $('.se3-1>div:first-child').removeAttr('class')
            $('.se3-1>div:last-child').removeAttr('class')
            $('.se3-2>div:first-child').removeAttr('class')
            $('.se3-2>div:last-child').removeAttr('class')
        }


    })

})
