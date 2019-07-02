			$('.drp').click(function(){
				 $(".navigation").animate({
		            left: '0px',
		        },"fast");

				function slide(){
					
					$(".drp").css("position","fixed");
					$(".drp").animate({right: '-20%'},300);
					$(".dark-bg").css("display","block");
				}
				setTimeout(slide,100);
			});

			$('#close').click(function(){
				
				function close(){
					$('.navigation').animate({left: '-100%'},300);
					$(".drp").animate({right: '5%'},300);
					$(".dark-bg").css("display","none");
				}
				setTimeout(close,200);
			});




