 // THESE WERE THE PROTOTYPES FOR THE HIDE SCRIPT
//none of these worked, but a valiant effort.
$(document).ready(function(){
    console.log('fader has loaded');

       $('#work li').hide(); 
       $('#projects li').hide(); 

    function buttonClick(){
        $('#work-btn').click(function(event){
            console.log('work button click');
            //pseudo code: if projects button clicked after work
              $('#projects li').each(function(){
                // $('#work li').hide();
                $(this).fadeOut(5000);
            });
            // else
            $('#work li').each(function(){
                var delay = 0;
                $(this).delay(delay).fadeIn(5000)
                delay += 1000;
            });
        });
    } //this ends buttonClick
    buttonClick();

    function buttonClicker(){
        $('#projects-btn').click(function(event){
            console.log('projects button click');
            //pseudo code: if work button clicked after projects, do
            $('#work li').each(function(){
                $(this).fadeOut(2500);
            });
            //else
            $('#projects li').each(function(){
                // $(this).delay(1000);
                // $('#work li').hide();
                $(this).fadeIn(5000);
            });
        });
    } //this ends buttonClicker
    buttonClicker();


});


function showMeTheItem(){
        // $('.teaser').hide();
        $('.a').hide();
        $('.b').hide();
        $('.c').hide();
        $('.d').hide();

        $('.show-me').click(function(event){
        if($('.a')){
            console.log('button a pushed');
            $('.a').slideDown().fadeIn();  
        }else if($('.b')){
            console.log('button b pushed');
            $('.b').slideDown().fadeIn(); 
        }else if($('.c')){
            console.log('button c pushed');
            $('.c').slideDown().fadeIn(); 
        }else if($('.d')){
            console.log('button d pushed');
            $('.d').slideDown().fadeIn(); 
        }else{
            console.log('this is the end of the line');
        }

        });
    }
    showMeTheItem();
    

 //this one works, if you mess up go back to it!

 $(document).ready(function(){
    console.log('fader has loaded');

    function buttonClick(){
        $('#work li').hide();  
        $('#work-btn').click(function(event){
            console.log('work button click');
            $('#work li').each(function(){
                $(this).fadeIn(5000)
            });
        });
    } //this ends buttonClick
    buttonClick();

    function buttonClicker(){
        $('#projects li').hide();  
        $('#projects-btn').click(function(event){
            console.log('projects button click');
            $('#work li').each(function(){
                $(this).fadeOut(2500);
            });
            $('#projects li').each(function(){
                $(this).delay(1000);
                $('#work li').hide();
                $(this).fadeIn(7000);
            });
        });
    } //this ends buttonClick
    buttonClicker();


});

 // $(document).ready(function(){
 //    console.log('fader has loaded');

 //    function buttonClick(){
 //        $('#work li').hide();
 //        console.log('button click');
 //            $('#work-btn').click(function(event){
 //                console.log('hello');
 //                var eachItem = $("#work li");
 //                eachItem.each(function(idx, li) {
 //                    var product = $(li);
 //                    for (i=0; i < product.length; i++){
 //                        $('li').fadeIn(5000).delay(1000).fadeOut(5000);
 //                    }
 //                });
                


    
 //        });

 //    } //this ends buttonClick


 //    buttonClick();
 // });



// keep working on this.
//   $(document).ready(function(){
//     console.log('fader has loaded');

//     function buttonClick(){
//         $('#work li').hide();
//         console.log('button click');
//             $('#work-btn').click(function(event){
//                 $('#work li:first').each(function(){
//                     $(this).fadeIn(5000).delay(1000).fadeOut(5000, function(){
//                             console.log('you are in the fadeout');
                           
//                     });
//                 });
    
//         });

//     } //this ends buttonClick


//     buttonClick();
//  });


// This works for ALL the items.
 //  $(document).ready(function(){
 //    console.log('fader has loaded');

 //    function buttonClick(){
 //        $('#work li').hide();
 //        console.log('button click');
 //            $('#work-btn').click(function(event){
 //                $('#work li').each(function(){$(this).fadeIn(5000);
 //        });
 //    } //this ends buttonClick
 //    buttonClick();
 // });


// this works for the first item only.  Do not destroy!
//   $(document).ready(function(){
//     console.log('fader has loaded');

//     function buttonClick(){
//         $('#work li').hide();
//         console.log('button click');
//             $('#work-btn').click(function(event){
//                 $('#work li:first').fadeIn(5000).delay(800);
//                 $('#work li:first').fadeOut(5000,function(){
                    
//                 });

//         });

//     } //this ends buttonClick


//     buttonClick();
//  });
                   
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

