$(window).bind('load', function(){
    console.log("the page has loaded")
    
    $('select').change(function(){
        //add in a smooth fadeout
        $('.this-is').addClass('hidden');
        //get this to work for the buttons
        $('.portfolio').addClass('disabled');

    });
	

});	





