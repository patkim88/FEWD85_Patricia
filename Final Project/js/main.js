$(function(){
    $('nav ul li a').mouseenter(function(){
        $(this).css('color', '#709176');  
    $(this).mouseout(function(){
        $(this).css('color', '#cde77f');    
        });
    });
});