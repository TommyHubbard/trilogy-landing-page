$(document).ready(function () {

	/*$("li").click(function(){

	  $(this).next().toggle("slow", "swing");
		$(this).toggleClass("expandedAnswer");

		var btn = $('.card-head > a'),
			console = btn.parent().parent();
		console.toggleClass('collapsed');
		console.find('.card-body').slideToggle();
		if (console.hasClass('collapsed'))
			btn.find('span').removeClass('glyphicon-minus').addClass('glyphicon-plus');
		else
			btn.find('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');

	});*/

	function faq(id) {
		var active = $('#faq .container .row div div div div:first-child a[href="' + id + '"]'),
			title = active.parent().parent(),
			scope = title = active.parent().parent().parent().parent().parent();
			console.log(title);
		var test = scope.find('.fas');
		console.log(test);
		$('#faq .container .row div div').find('.active').removeClass('fa-chevron-circle-down active').addClass('fa-chevron-circle-right');
		title.find('i').removeClass('fa-chevron-circle-right').addClass('fa-chevron-circle-down active');
	}
	$('#faq h4.panel-title div:last-child a').on('click', function(e){
		var id = e.currentTarget.hash;
			faq(id);
	});
});