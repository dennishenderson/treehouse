class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const ernie = new Pet('dog', 1, 'pug');
const duke = new Pet('dog', 11, 'Syberian Husky');

console.log(ernie);
console.log(duke);
