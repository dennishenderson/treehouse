const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}

myString.string = "I love full stack JavaScript";

myString.characters = myString.string.length;

var numWords = myString.countWords();

console.log(myString.characters);
