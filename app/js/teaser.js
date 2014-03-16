$(document).ready(function(){
	console.log('teaser has loaded');
	function showMeTheItemA(){
		$('#1').hide();
		$('#a').click(function(event){
			// $('hidden').slideDown().fadeIn(); 
			console.log("the button triggers");
				$('#1').slideDown().fadeIn(750);
		});
	}
	showMeTheItemA();

	function showMeTheItemB(){
		$('#2').hide();
		$('#b').click(function(event){
			// $('hidden').slideDown().fadeIn(); 
			console.log("the button triggers");
				$('#2').slideDown().fadeIn(750);
		});
	}
	showMeTheItemB();


	function showMeTheItemC(){
		$('#3').hide();
		$('#c').click(function(event){
			// $('hidden').slideDown().fadeIn(); 
			console.log("the button triggers");
				$('#3').slideDown().fadeIn(750);
		});
	}
	showMeTheItemC();

	function showMeTheItemD(){
		$('#4').hide();
		$('#d').click(function(event){
			// $('hidden').slideDown().fadeIn(); 
			console.log("the button triggers");
				$('#4').slideDown().fadeIn(750);
		});
	}
	showMeTheItemD();

	
});