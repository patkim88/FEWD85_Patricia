// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }
function switchTheme(){
  var theme = $(this).attr('class');
  console.log(theme);
  $('body').attr('crlass', theme);
};

$(function(){
  $('#switcher li').on('click', switchTheme);
  $('.stop-me').on('click', function(event){
    event.preventDefault();
    alert("DON'T DO THAT");
  })
});

