$('document').ready(function(){
	console.log('go away has loaded');

	function goAwayA(){
		$('#alpha').click(function(event){
			console.log("the hiding button triggers");
				$('#1').slideUp();
		});
	}
	goAwayA();


	function goAwayB(){
		$('#beta').click(function(event){ 
			console.log("the hiding button triggers");
				$('#2').slideUp();
		});
	}
	goAwayB();


	function goAwayC(){
		$('#gamma').click(function(event){
			console.log("the hiding button triggers");
				$('#3').slideUp();
		});
	}
	goAwayC();


	function goAwayD(){
		$('#delta').click(function(event){
			console.log("the hiding button triggers");
				$('#4').slideUp();
		});
	}
	goAwayD();

});