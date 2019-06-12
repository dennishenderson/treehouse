const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        // write code here.
        if (this.isTurn) {
          return this.name + ' is now playing!';
        }
    }
}

console.log(player1.play());
