class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(! this.cards) {
      return undefined;
    }

    let m = this.cards.length;
    let temp = {};
    let i = this.cards.length;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      temp = this.cards[m];
      this.cards[m] = this.cards[i]; //put the random card to the last position
      this.cards[i] = temp;
    }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  
  isFinished() {
    if(this.pairsGuessed == this.cards.length / 2) {
      return true;
    }
    return false;
  }
}