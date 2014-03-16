 // THESE WERE THE PROTOTYPES FOR THE HIDE SCRIPT


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

