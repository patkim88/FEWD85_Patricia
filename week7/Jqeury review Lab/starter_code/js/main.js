$(function (){
    $("#submit-btn").on('click', function(event){
        event.preventDefault();
        var city = $('#city.type').val();
        if(city === 'New York' || city === 'nyc'){
            $('body').attr('class', 'nyc')
        }
        // else if(city === "Sydney"){
        //     $('body').attr("class", "sydney")
        // }
    })
});


 