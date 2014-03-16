$(document).ready(function(){
    console.log('fader has loaded');

       $('.background-box-work').hide(); 
       $('.background-box-projects').hide(); 

    function buttonClick(){
        $('#work-btn').click(function(event){
            console.log('work button click'); 
            if($('.background-box-projects').is(':visible')){
                $('.background-box-projects').fadeOut(5000);
                $('.background-box-work').delay(1000).fadeIn(10000);
            }else{
             $('.background-box-work').fadeIn(10000);
         }

        });
    } //this ends buttonClick
    buttonClick();

//do the opposite for button click


    function buttonClicker(){
        $('#projects-btn').click(function(event){
            console.log('project button clicked');
            if($('.background-box-work').is(':visible')){
                $('.background-box-work').fadeOut(5000);
                $('.background-box-projects').delay(1000).fadeIn(10000);
            }else{
                $('.background-box-projects').fadeIn(10000);
            }
        });
    }
    buttonClicker();



});



    



                   
    

    
 
    

















//this kind of works.
// $(document).ready(function(){
//     console.log('hide has loaded');



//     function buttonClick(item){
//         item.fadeIn(5000);
//         item.fadeOut(function(){ 
//                 if($('#work li').next().length > 0){
//                     $('#work li').next()
//                 } else {
//                     $('#work li').siblings(':first');
//                 }

//             });

//     }


// $('#work li').hide();
// $(function(){
//     $('work-btn').click(buttonClick($('#work li:first')));
// });


// });

