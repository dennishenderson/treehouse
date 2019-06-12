const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}


var numWords = myString.countWords();
myString.characters = myString.string.length;
console.log(myString.characters);
