$(document).ready(function(){
    let clicked= 0;

    $('img').click(function(){
        if(clicked==0){
            $(this).addClass('big')
            clicked+=1;
        }  
        else{
            $(this).removeAttr('class')
            clicked=0;
        }
        })
        


})