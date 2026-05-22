$(document).ready(function (){
        
          $("#home").click(function (){
                $('html, body').animate({
                    scrollTop: $(".herosection").offset().top
                }, 1000);
            });
                        
              $("#click1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#work").offset().top
                }, 1000);
            });
            
              $("#click2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 500);
            });
             
        	  $("#click3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 500);
                
        
                
                
            });
            
    
	$(window).scroll(function() {
     	 	 if ($(this).scrollTop() > 125){  
      			  $("header").addClass('scrolldown').removeClass('scrollup');
      		  } 		
			 else{  
      			  $("header").addClass('scrollup').removeClass('scrolldown');
      		  } 	
      				  
	});
 			
 			
 				 
      	 	
      	 	
      	 	
});

