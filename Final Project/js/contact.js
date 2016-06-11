$(function(){
    $('nav ul li a').mouseenter(function(){
        $(this).css('color', '#709176');  
    $(this).mouseout(function(){
        $(this).css('color', '#cde77f');    
        });
    });
});

var myCenter=new google.maps.LatLng(40.760575,-73.767127);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomL

google.maps.event.addDomListener(window, 'load', initialize);