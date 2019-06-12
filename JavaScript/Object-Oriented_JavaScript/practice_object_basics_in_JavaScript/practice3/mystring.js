const myString = {
	string: "Programming with Treehouse is fun!",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}

let numWords = myString.countWords();
console.log(numWords);
