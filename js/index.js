const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
let cardsFlipped = 1;
let card1 = {};
let card2 = {};
let canFlip = true;

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(! canFlip)
        return;
      
      canFlip = false;

      console.log(`Card clicked: ${card}`);
      if(cardsFlipped < 2) {
        cardsFlipped++;
        card.classList.toggle('turned');
        card1 = card;
        canFlip = true;
      } else {
        cardsFlipped = 1;
        card2 = card;
        let isPair = memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'));
        
        document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
        document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;

        card2.classList.toggle('turned');
        if(isPair) {
          card1.classList.toggle('blocked');
          card2.classList.toggle('blocked');
          canFlip = true;
          if(memoryGame.isFinished()) {
            setTimeout(() => {
              alert('GAME OVER');
            }, 600);
          }
        } else {
          setTimeout(() => {
            card1.classList.toggle('turned');
            card2.classList.toggle('turned');
            canFlip = true;
          }, 1000);
        }
      }
    });
  });
});
