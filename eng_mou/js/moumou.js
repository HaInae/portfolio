var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  
});

$(document).ready(function(){
 
  let nav=0 

  $('header').click(function(){
    if(nav==0){
      $('header>nav').css('display','flex');
      nav=1;
    }
    else if(nav==1){
      $('header>nav').css('display','none');
      nav=0;
    }
  })

  $(window).scroll(function(){
    
    if(scrollY>200){
      $('.se2-9').addClass('up150')
      $('.se2-5').addClass('up150')
      $('.se2-8').addClass('up100')
      $('.se2-4').addClass('up100')
      $('.se2-3').addClass('up50')
    }
    if(scrollY>1200){
      $('.se3 .swiper-slide:first-child').addClass('up50')
      $('.se3 .swiper-slide:nth-child(2)').addClass('up100')
      $('.se3 .swiper-slide:nth-child(3)').addClass('up150')
    }
    if(scrollY>3800){
      $('.se5-1').addClass('up150')
    }
    if(scrollY>4400){
      $('.se5-2').addClass('up150')
    }
    if(scrollY>5000){
      $('.se5-3').addClass('up150')
    }
    if(scrollY>5300){
      $('.review .swiper-slide:first-child').addClass('up50')
      $('.review .swiper-slide:nth-child(2)').addClass('up100')
      $('.review .swiper-slide:nth-child(3)').addClass('up150')
    }
    
  })


})