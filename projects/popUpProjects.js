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