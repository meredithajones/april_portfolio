// Setting up vars so they are in the global scope
var cards, nCards, cover, openContent, openContentText, 
pageIsOpen = false, openContentImage, closeContent, 
windowWidth, windowHeight, currentCard;

// initiate the function
init();

function init() {
  resize();
  selectElements();
  attachListeners();
}

// Selecting all the elements in the DOM that are going to be used
function selectElements() {
    cards = document.getElementsByClassName('card'),
    nCards = cards.length,
    cover = document.getElementById('cover'),
    openContent = document.getElementById('open-content'),
    openContentText = document.getElementById('open-content-text'),
    openContentImage = document.getElementById('open-content-image')
    closeContent = document.getElementById('close-content');
  }

  /* Attaching three event listeners:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
    for (var i = 0; i < nCards; i++) {
      attachListenerToCard(i);
    }
    closeContent.addEventListener('click', onCloseClick);
    window.addEventListener('resize', resize);
  }
  
  function attachListenerToCard(i) {
    cards[i].addEventListener('click', function(e) {
      var card = getCardElement(e.target);
      onCardClick(card, i);
    })
  }
  
  /* When a card is clicked */
function onCardClick(card, i) {
    // set the current card
    currentCard = card;
    // add the 'clicked' class to the card, so it animates out
    currentCard.className += ' clicked';
    // animate the card 'cover' after a 500ms delay
    setTimeout(function() {animateCoverUp(currentCard)}, 500);
    // animate out the other cards
    animateOtherCards(currentCard, true);
    // add the open class to the page content
    openContent.className += ' open';
  }
  