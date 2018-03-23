$(document).ready(function () {
	//При клике на плюс карта увеличивается в 2 раза 
	
	var zoom = 1;

	$('#plus').on('click', function (e){

		zoom += 1;
		if(zoom == 2) {
	   			
		$('#map').css({'transform':'scale('+ (zoom) +') translateX(180px) translateY(180px)','transition':'transform 1s ease-in'});
	   
	   $('.country-marker').hover(function(){
		  
		   $(this).find(".description").css({'transform':'scale(0.5)','transition':'transform 0.5s ease-in'});
		   $(this).find(".description").hover(function(){
		   
		   $(this).css({'transform':'scale(0.5)','transition':'transform 0.5s ease-in'});
		   },function(){
				$(this) .css('transform','scale(0)');
			});
			},function(){
			     
				$(this).find(".description").css('transform','scale(0)');
			});
		}

		else if(zoom == 3) {
		
			$('#map').css({'transform':'scale('+ (zoom) +') translateX(250px) translateY(250px)','transition':'transform 1s ease-in'});
	   
	   $('.country-marker').hover(function(){
		  
		   $(this).find(".description").css({'transform':'scale(0.33)',	'transition':'transform 0.5s ease-in'});
		   $(this).find(".description").hover(function(){
		   
		   $(this).css({'transform':'scale(0.33)','transition':'transform 0.5s ease-in'});
		   },function(){
				$(this) .css('transform','scale(0)');
			});
			},function(){
			     
				$(this).find(".description").css('transform','scale(0)');
			});
		}
		
		else if(zoom == 4) {
		
			$('#map').css({'transform':'scale('+ (zoom) +') translateX(310px) translateY(280px)','transition':'transform 1s ease-in'});
	   
	   $('.country-marker').hover(function(){
		  
		   $(this).find(".description").css({'transform':'scale(0.25)','transition':'transform 0.5s ease-in'});
		   $(this).find(".description").hover(function(){
		   
		   $(this).css({'transform':'scale(0.25)','transition':'transform 0.5s ease-in'});
		   },function(){
				$(this) .css('transform','scale(0)');
			});
			},function(){
			     
				$(this).find(".description").css('transform','scale(0)');
			});
		}
		
		else if(zoom >= 5) {
		
			$('#map').css({'transform':'scale('+ (zoom) +') translateX(350px) translateY(300px)','transition':'transform 1s ease-in'});
	   
	   $('.country-marker').hover(function(){
		  
		   $(this).find(".description").css({'transform':'scale(0.2)','transition':'transform 0.5s ease-in'});
		   $(this).find(".description").hover(function(){
		   
		   $(this).css({'transform':'scale(0.2)','transition':'transform 0.5s ease-in'});
		   },function(){
				$(this) .css('transform','scale(0)');
			});
			},function(){			     
				$(this).find(".description").css('transform','scale(0)');
			});
		}
		
		else if(zoom >= 7) {
		
			//$('#map').css({'transform':'scale('+ (zoom) +') translateX(350px) translateY(300px)','transition':'transform 1s ease-in'});
	   
	   $('.country-marker').hover(function(){
		  
		   $(this).find(".description").css({'transform':'scale(0.1)','transition':'transform 0.5s ease-in'});
		   $(this).find(".description").hover(function(){
		   
		   $(this).css({'transform':'scale(0.1)','transition':'transform 0.5s ease-in'});
		   },function(){
				$(this) .css('transform','scale(0)');
			});
			},function(){			     
				$(this).find(".description").css('transform','scale(0)');
			});
		}
		
	});
	
	
	
	$('#minus').on('click', function (e){
	 e.preventDefault();

	 	if( $('#map').attr('style') ) {
	 		zoom = zoom - 1;

			$('#map').css('transform', 'scale('+ (zoom) +') translateX(300px) translateY(265px)').css('transition','transform 1s ease-in');

			if( zoom == 1 ) {
				
				setTimeout(function(){
					$('#map').removeAttr('style');
					
					$('.country-marker').hover(function(){
		  
					   $(this).find(".description").css({'transform':'scale(1)','transition':'transform 0.5s ease-in'});
					   $(this).find(".description").hover(function(){
					   
					   $(this).css({'transform':'scale(1)','transition':'transform 0.5s ease-in'});
					   },function(){
							$(this) .css('transform','scale(0)');
						});
						},function(){
							 
							$(this).find(".description").css('transform','scale(0)');
					});
					
		 			zoom = 1;
				}, 1000);
				
		 	}
		  
		  if( zoom >= 3 ){
		   $('.country-marker').hover(function(){
			   $(this).find(".description").css({'transform':'scale(.3) translateX(0%) translateY(0%)','transition':'transform 0.5s ease-in'});
				$(this).find(".description").hover(function(){
				   $(this).css({'transform':'scale(.3)','transition':'transform 0.5s ease-in'});
			   },function(){
					$(this) .css('transform','scale(0)');
				});
				},function(){
					$(this).find(".description").css('transform','scale(0)');
				});
				
				}
			else if(zoom = 2) {
		   $('.country-marker').hover(function(){
			   $(this).find(".description").css({'transform':'scale(.5) translateX(0%) translateY(0%)','transition':'transform 0.5s ease-in'});
				$(this).find(".description").hover(function(){
				   $(this).css({'transform':'scale(.5)','transition':'transform 0.5s ease-in'});
			   },function(){
					$(this) .css('transform','scale(0)');
				});
				},function(){
					$(this).find(".description").css('transform','scale(0)');
				});
				
				}
				
			
	 	} else {
	 		return false;
	 	}
		
});


});