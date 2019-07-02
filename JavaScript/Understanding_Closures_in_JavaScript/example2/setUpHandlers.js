var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function() {
    console.log(name);
  }
}

// this solves the problem by calling the createHandler() function above
for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}


// // The below code does not work properly.  it ends up showing the last button name for all of them.
// for(var i = 0; i < buttons.length; i += 1) {
// 	var button = buttons[i];
// 	var buttonName = button.innerHTML;
// 	button.addEventListener('click', function() {
// 		console.log(buttonName);
// 	});
// }
