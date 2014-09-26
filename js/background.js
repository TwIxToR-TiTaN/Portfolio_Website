	$(function(){
	  $('#midground').css({backgroundPosition: '0px 0px'});
	  $('#foreground').css({backgroundPosition: '0px 0px'});
	  $('#background').css({backgroundPosition: '0px 0px'});
	
		$('#midground').animate({
			backgroundPosition:"-5000px -1000px"
		}, 200000, 'linear');
		
		$('#foreground').animate({
			backgroundPosition:"-5000px -1000px"
		}, 100000, 'linear');
		
		$('#background').animate({
			backgroundPosition:"-5000px -1000px"
		}, 300000, 'linear');
		
	});