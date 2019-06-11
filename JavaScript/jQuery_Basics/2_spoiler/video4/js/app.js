const $spoilerDiv = $('.spoiler');
const $spoilerSpan = $('.spoiler span');

// Create the "Revela Spoiler" button
const $buttonCreate = $('<button>Reveal Spoiler</button>');
// Append to web page
$spoilerDiv.append($buttonCreate);

const $spoilerButton = $('.spoiler button');

//Hide the spoiler text
$spoilerSpan.hide();
// When the button is pressed
$spoilerButton.click(function(){
  //Show the spoiler text
  $spoilerSpan.show();
  //Hide the "Reveal Spoiler" button
  $spoilerButton.hide();
  $('img').css('filter', 'blur(3px)');
});
