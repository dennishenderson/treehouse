const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click',(event) => {
  if (event.target.tagName == 'BUTTON') {
    let button = event.target;
    let prevP = button.previousElementSibling;
    prevP.className = "highlight";
  }
});
