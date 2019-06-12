const myString = {
	string: "Programming with Treehouse is fun!",
  countWords: function() {
    return this.string.split(' ').length;
  }
}
console.log(myString.countWords());
