// $(function() {
//     $('.readmore').click(function(){
//         $('#show-this-on-click').removeClass('hide');
//             $('.readmore').hide();
//             $('.readless').show();
//     });
// });

// 
//     $('.readless').click(function(){
//         $('.readmore').show();
//         $('.readless').hide();
//         $('#show-this-on-click').hide();
//         console.log('lol');
//     });
// });

$(function(){

    $('.readmore').click(function(){
        $('#show-this-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
    });

    $('.readless').click(function(){
        $('.readmore').show();
        $('.readless').hide();
        $('#show-this-on-click').hide();
    });

    $('.learnmore').click(function(){
        $('#learnmoretext').show();
        $('.learnmore').hide();

    });
});