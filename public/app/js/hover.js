console.log('hover.js has loaded');
$('div.details').hover(function(){
	$(this).removeClass('details');
	$(this).addClass('event');
});

