$(window).bind('load', function(){
    console.log("the page has loaded")
    
    $('select').change(function(){
        $('.hidden').removeClass('hidden');
        $('.portfolio').addClass('disabled');

    });
	

});	





