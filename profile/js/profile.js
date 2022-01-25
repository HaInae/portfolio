
$(document).ready(function(){
    $(window).scroll(function(){
        if(scrollY>=0 && scrollY <=100){
            $('p').css('display','none')
            $('p.p1').css('display','block')
        }
        else if(scrollY>=101 && scrollY <=200){
            $('p').css('display','none')
            $('p.p2').css('display','block')
        }
        else if(scrollY>=201 && scrollY <=300){
            $('p').css('display','none')
            $('p.p3').css('display','block')
            $('.p3b').css('display','none')
        }
        else if(scrollY>=301 && scrollY <=400){
            $('.p3b').css('display','inline')
        }
        else if(scrollY>=401 && scrollY <=500){
            $('p').css('display','none')
            $('p.p4').css('display','block')
        }
        else if(scrollY>=401 && scrollY <=500){
            $('p').css('display','none')
            $('p.p4').css('display','block')
        }
        else if(scrollY>=501 && scrollY <=600){
            $('p').css('display','none')
            $('p.p5').css('display','block')
            $('.photo>*').css('display','none')
        }
        else if(scrollY>=601 && scrollY <=900){
            $('p').css('display','none')
            $('p.p6').css('display','block')
            $('.ad').css('display','block')
        }
        else if(scrollY>=701 && scrollY <=800){
            $('.photo>*').css('display','none')
        }
        else if(scrollY>=801 && scrollY <=900){
            $('.photo>*').css('display','none')
        }
        
        else if(scrollY>=901 && scrollY <=1000){
            $('p').css('display','none')
            $('p.p7').css('display','block')
            $('.photo>*').css('display','none')
            $('.hongik').css('display','block')
        }
        else if(scrollY>=1001 && scrollY <=1100){
            $('p').css('display','none')
            $('p.p8').css('display','block')
            $('.photo>*').css('display','none')
            $('.prize').css('display','block')
        }
        else if(scrollY>=1101 && scrollY <=1200){
            $('p').css('display','none')
            $('p.p9').css('display','block')
            $('.photo>*').css('display','none')
        }
        else if(scrollY>=1201 && scrollY <=1300){
            $('p').css('display','none')
            $('p.p10').css('display','block')
        }
        else if(scrollY>=1301 && scrollY <=1400){
            $('p').css('display','none')
            $('p.p11').css('display','block')
            // $('p.p11>.out').css('display','block')
        }
        else if(scrollY>=1401 && scrollY <=1500){
            $('p').css('display','none')
            $('p.p12').css('display','block')
            $('.photo>*').css('display','none')
            // $('p.p12>.in').css('display','block')
        }
        else if(scrollY>=1501 && scrollY <=1600){
            $('p').css('display','none')
            $('p.p13').css('display','block')
            $('.origin').css('display','block')
        }
        else if(scrollY>=1601 && scrollY <=1700){
            $('p').css('display','none')
            $('p.p14').css('display','block')
            $('p.p14>.in').css('display','block')
            $('.photo>*').css('display','none')
        }
        else if(scrollY>=1701 && scrollY <=1800){
            $('p').css('display','none')
            $('p.p15').css('display','block')
    
        }
        else if(scrollY>=1801 && scrollY <=1900){
            $('p').css('display','none') 
            $('.p15_1').css('display','block') 
            
        }
        else if(scrollY>=1901 && scrollY <=2000){
            $('p').css('display','none')
            $('p.p16').css('display','block')
            
        }
        else if(scrollY>=2001 && scrollY <=2100){
            $('p').css('display','none')
            
        }
        else if(scrollY>=2101 && scrollY <=2200){
            $('p').css('display','none')
            $('p.p17').css('display','block')
        }
        else if(scrollY>=2201 && scrollY <=2300){
            $('p').css('display','none')
            $('p.p18').css('display','block')
        }
        else if(scrollY>=2301 && scrollY <=2400){
            $('p').css('display','none')
            $('p.p19').css('display','block')
        }
        else if(scrollY>=2401 && scrollY <=2500){
            $('p').css('display','none')
        }
        else if(scrollY>=2501 && scrollY <=2600){
            $('p.p20').css('display','block')
            $('.text').css({
                background:"#000",
                color:"#fff"
            })
            $('.wrap').css('background','#000')
           
        }
        else if(scrollY>=2601 && scrollY <=2700){
            $('p').css('display','none')
            $('.text').css({
                background:"#fff",
                color:"#000"
            })
            $('.wrap').css('background','#fff')
           
            
            $('.p20-1').css('display','block')
           
        }
        else if(scrollY>=2701 && scrollY <=2800){
            
            
 
        }
        else if(scrollY>=2801 && scrollY <=2900){
            $('p').css('display','none')
            
            

        }
        else if(scrollY>=2901 && scrollY <=3000){
            $('p').css('display','none')
            $('p.p21').css('display','block')
            $('p.p21>.blue').css('display','none')
            $('p.p21>.red').css('display','none')
            $('p.p21>.make').css('display','none')
            
        }
 
        else if(scrollY>=3001 && scrollY <=3100){
            $('p.p21>.blue').css('display','inline')
        }
        else if(scrollY>=3101 && scrollY <=3200){
            $('p.p21>.red').css('display','inline')
        }
        else if(scrollY>=3201 && scrollY <=3300){
            $('p.p21>.make').css('display','inline')
        }
        else if(scrollY>=3301 && scrollY <=3400){
            $('p').css('display','none')
            $('.p22').css('display','block')
        }
 
    })



})