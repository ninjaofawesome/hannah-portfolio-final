$(document).ready(function(){
	console.log('box.js has loaded');
	$('button').on('click', function(){
		console.log('you clicked the button');
	});
});
	






//******come back to timeout version when you know more about JS
	//it should start the timer for viewing.
	//it should hide the dropdown menu like an overlay
	//it should close after the timeout finishes

// $(document).ready(function(){ 
// 	console.log('the page loaded');
// 	var __nativeST__=window.setTimeout;

// 	window.setTimeout = function (vCallback, nDelay){
// 		var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
// 		return __nativeST__(vCallback instanceof Function ? function(){
// 		vCallback.apply(oThis, aArgs);
// 	} : vCallback, nDelay);
// 	};

// 	window.setTimeout(function popUpBox(){
// 		console.log('you are inside popup box');
// 		$('.box').show();
// 	}, 1000)
// 
	
// });

	