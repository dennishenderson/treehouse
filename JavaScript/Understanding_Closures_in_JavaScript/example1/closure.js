var birds = 0;

function dogHouse() {
  var dogs = 8;

  function showDogs() {
    console.log(dogs);  // 8 
  }

  return showDogs;
}

var getDogs = dogHouse();

getDogs();  // 8