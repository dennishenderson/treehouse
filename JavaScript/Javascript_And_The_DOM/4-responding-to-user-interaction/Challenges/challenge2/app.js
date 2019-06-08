let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (event) => {
  if (event.target.tagName == 'INPUT') {
    event.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});
