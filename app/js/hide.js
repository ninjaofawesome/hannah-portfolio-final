$(document).ready(function(){
    console.log('hide has loaded');

    
        $('#work-btn').on('click', function(){
            console.log('you clicked the button!');
            $('#work li:first').fadeIn(5000);
            $('#work li:first').fadeOut(function(){
                if(li.next().length >0){
                    $('#work li').next()
                } else {
                    $('#work li').siblings(':first');
                }
                });


        });


$('#work li').hide();

});