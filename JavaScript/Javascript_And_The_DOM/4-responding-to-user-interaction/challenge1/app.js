var warning = document.getElementById("warning");
var button = document.getElementById('makeItRed');

button.addEventListener('click', () => {
  document.getElementById('warning').style.backgroundColor = 'red';
});
