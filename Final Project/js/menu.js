$(function(){
    $('nav ul li a').mouseenter(function(){
        $(this).css('color', '#709176');  
    $(this).mouseout(function(){
        $(this).css('color', '#cde77f');    
        });
    });
});

$(function(){
    $('.sidebar ul li:nth-child(1)').click(function(){
        $(this).addClass('highlight');
            $(".appetizers").animate({
                height: 'toggle'
                });
                    $('.sidebar ul li').not(this).removeClass('highlight');
                        $('.appetizers').siblings().hide();
    });

    $('.sidebar ul li:nth-child(2)').click(function(){
            $(this).addClass('highlight');
        $(".salads").animate({
            height: 'toggle'
        });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.salads').siblings().hide();
    });

    $('.sidebar ul li:nth-child(3)').click(function(){
            $(this).addClass('highlight');
                $(".chicken").animate({
                height: 'toggle'    
            });
                    $('.sidebar ul li').not(this).removeClass('highlight');
                        $('.chicken').siblings().hide();
    });

    $('.sidebar ul li:nth-child(4)').click(function(){
        $(this).addClass('highlight');
            $(".bbq-ribs").animate({
            height: 'toggle'
            });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.bbq-ribs').siblings().hide();
    });

    $('.sidebar ul li:nth-child(5)').click(function(){
        $(this).addClass('highlight');
            $(".combos").animate({
            height: 'toggle'
        });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.combos').siblings().hide();
    });

    $('.sidebar ul li:nth-child(6)').click(function(){
        $(this).addClass('highlight');
            $(".burgers").animate({
            height: 'toggle'
        });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.burgers').siblings().hide();
    });

    $('.sidebar ul li:nth-child(7)').click(function(){
        $(this).addClass('highlight');
            $(".sides").animate({
            height: 'toggle'
            });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.sides').siblings().hide();
    });

    $('.sidebar ul li:nth-child(8)').click(function(){
        $(this).addClass('highlight');
            $(".drinks").animate({
            height: 'toggle'
        });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.drinks').siblings().hide();
    });

    $('.sidebar ul li:nth-child(9)').click(function(){
        $(this).addClass('highlight');
            $(".lunch").animate({
            height: 'toggle'
        });
                $('.sidebar ul li').not(this).removeClass('highlight');
                    $('.lunch').siblings().hide();
    });
});
