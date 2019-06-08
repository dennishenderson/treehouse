// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
// h1.innerHTML = "I'm a BOSS";
h1.textContent = "Test";

// 2: Set the color of the <h1> to a different color
h1.style.color = 'orange';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const divDesc = document.querySelector('.desc');
divDesc.innerHTML = 'This is a <b>BOLD</b> paragraph';

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.innerHTML = '<input> Waffles';
ul.appendChild(li);

/* The below code is what I came up with and it works, but there is a far easier
   way to do this using the above code...
   The differences is that textContent does not parse HTML tags, innerHTML does.

const inputNew = document.createElement('input');
li.textContent = " Waffles";
li.prepend(inputNew);
ul.appendChild(li);
*/

// 6: Change all <input> elements from text fields to checkboxes
const input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i++) {
  input[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const divExtra = document.querySelector('.extra');
const buttonDelete = document.createElement('button');
buttonDelete.textContent = "Delete";
divExtra.appendChild(buttonDelete);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const divContainer = document.querySelector('.container');
buttonDelete.addEventListener('click', () => {
  divContainer.removeChild(divExtra);
});
