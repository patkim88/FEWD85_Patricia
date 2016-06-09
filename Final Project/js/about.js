$(function(){
    $('a').mouseenter(function(){
        $(this).css('color', '#709176');  
    $(this).mouseout(function(){
        $(this).css('color', '#cde77f');    
        });
    });
});

$(function(){
    // first customer testimonial slide down ********************
    $('#fa-right-one').click(function(){
        $('#first').slideDown();
        $(this).hide();
        $('.customerone #fa-down-one').show();
    });

    $('#fa-down-one').click(function(){
        $('#first').slideUp();
        $(this).hide();
        $('#fa-right-one').show();
    });   

    // second customer testimonial slide down ********************
    $('#fa-right-two').click(function(){
        $('#second').slideDown();
        $(this).hide();
        $('.customertwo #fa-down-two').show();
    });

    $('#fa-down-two').click(function(){
        $('#second').slideUp();
        $(this).hide();
        $('#fa-right-two').show();
    });   
});