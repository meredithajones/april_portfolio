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
  