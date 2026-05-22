$(document).ready(function(){
      	$(window).scroll(function(){
     	 	 if ($(this).scrollTop() > 125){  
      			  $("header").addClass('scrolldown').removeClass('scrollup');
      		  } 		
			 else{  
      			  $("header").addClass('scrollup').removeClass('scrolldown');
      		  } 	
      				  
	});
      	

});





