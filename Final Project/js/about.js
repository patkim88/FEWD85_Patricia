$(function(){
    $('a').mouseenter(function(){
        $(this).css('color', '#709176');  
    $(this).mouseout(function(){
        $(this).css('color', '#cde77f');    
        });
    });
});

$(function(){
    $('.fa.fa-angle-double-right').click(function(){
        $('#first').slideDown();
        // $(this).hide();
        // $('.customerone .fa.fa-angle-double-down').show();
    });
});