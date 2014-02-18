console.log('buttons.js has loaded');

function disable(){
    console.log('You clicked the button.  Have a cookie.');
    $('#clicky1').attr('disabled', 'disabled');
    $('#clicky2').attr('disabled', 'disabled');
}

function enable(){
    //when the user clicks on the close button, the other buttons re-enable
    console.log('You clicked the box button.  Hooray.');
    $('#clicky1').removeAttr('disabled', 'disabled');
    $('#clicky2').removeAttr('disabled', 'disabled');

};



