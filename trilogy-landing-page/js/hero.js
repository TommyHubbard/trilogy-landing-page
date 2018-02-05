$(document).ready(function () {
	var idx = 0,	
	    lastPos = 0,
		arr = [
		'images/code_hero.jpg', 
		'images/data_hero.jpg' 
	];
	$('header .container .row .hero div div:eq(' + idx + ')').addClass('selected-hero-item');
	$('header .container .row .hero div div:eq(' + idx + ') h2').addClass('selected-hero-header');	
	idx++;	
	function hero(){
		var imgUrl = "url('" + arr[idx] + "')";
		$('header').fadeTo('fast', 0.3, function() {
			$(this).css('background-image', imgUrl);
		}).fadeTo('fast', 1);
		$('header .container .row .hero div div:eq(' + idx + ')').addClass('selected-hero-item');
		$('header .container .row .hero div div:eq(' + idx + ') h2').addClass('selected-hero-header');		
		if (idx != lastPos) {
			$('header .container .row .hero div div:eq(' + lastPos + ')').removeClass('selected-hero-item');
			$('header .container .row .hero div div:eq(' + lastPos + ') h2').removeClass('selected-hero-header');
			lastPos = idx;
		}
		idx++;
		if (idx >= arr.length)
			idx = 0;
	}
	setInterval(hero, 5000);		
});	