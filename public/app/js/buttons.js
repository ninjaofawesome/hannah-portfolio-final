//it should discern between button type clicked
//it should disable other button when clicked
//use value!

$(document).ready(function(){
    console.log('buttons loaded');
	$('button').on('click', function(event){
        event.stopPropogation();
	if(!$(this).hasClass('spacer')){
        console.log('hello');
	}

	});
});