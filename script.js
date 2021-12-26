// I am using a tutorial about JS/DOM (that uses a type/untyper for a single word)
// and expanding off it in an effort to learn more about JS and working with the DOM.

// These variables store all of the strings that will be typed out by MatrixType/Typer
const headOne = "Greetings, User."

// This is the list of class names that will be cycled through for typing/inserting

// This is our main function - it runs our script.
const MatrixType = function(textElement, string, typeTime = 1000) {
  this.textElement = textElement;
  this.string = string;
  // We start off with empty elements
  this.text = '';
  this.wordIndex = 0;
  this.typeTime = parseInt(typeTime, 10);
  this.typer();
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  // Split the string into an array of words
  const mySentence = this.string.split(" ");
  // set index to zero (start of sentence)
  let currentIndex = 0;
  // store current word in var
  let currentWord = mySentence[currentIndex];
  
  // add a character
  this.text = currentWord.substring(0, this.text.length + 1);

  //output our current text - instert .text into element
  let test = 'class=txt'
  this.textElement.innerHTML = `<span ${test}>${this.text}</span>`;

  // Type Speed
  let typeSpeed = 300;
  


  setTimeout(() => this.typer(), 500)
}

// Init once DOM Loads
document.addEventListener('DOMContentLoaded', init);

// Initialize the page
function init() {
  const textElement = document.querySelector('.Type-Greet');
  const string = headOne;
  const typeTime = 1000;
  // Initialize MatrixType
  new MatrixType(textElement, string, typeTime);
}