$(document).ready(function() {
	$('.nav li').click(function() {
		var category = $(this).attr('class');
		var thumbnail = $('a.thumbnail');
		if(category === "nav-mobile") {
			thumbnail.removeClass('selected');
			$('a.mobile').addClass('selected');
		} else if(category === 'nav-consumer') {
			thumbnail.removeClass('selected');
			$('a.consumer').addClass('selected');
		} else if(category === 'nav-commerce') {
			thumbnail.removeClass('selected');
			$('a.commerce').addClass('selected');
		} else if(category === 'nav-enterprise') {
			thumbnail.removeClass('selected');
			$('a.enterprise').addClass('selected');
		} else {
			thumbnail.removeClass('selected');
		}
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	});
});