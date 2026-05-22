$(document).ready(function(){

    $("#toggle1").click(function(){
 	    $("#drawer1").slideToggle("slow","swing", function(){
    	   $('html, body').animate({
                    scrollTop: $("#drawer1").offset().top - 75
                }, 750);
        });
                return false;        

    });

    
   $("#toggle2").click(function(){
 	    $("#drawer2").slideToggle("slow","swing", function(){
    	   $('html, body').animate({
                    scrollTop: $("#drawer2").offset().top - 75
                }, 750);
        });
                return false;        

    });
      
    
});




    
    

        
        
        
        
