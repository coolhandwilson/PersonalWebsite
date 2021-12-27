// I am using a tutorial about JS/DOM (that uses a type/untyper for a single word)
// and expanding off it in an effort to learn more about JS and working with the DOM.

// These variables store all of the strings that will be typed out by MatrixType/Typer
// const headOne = "Greetings, User."
const strList = [
  "Greetings, User",
  "Welcome to Wilson's personal portfolio"
]

const elementList = [
  "#First",
  "#Second"
]

let core = 0;

// This is the list of class names that will be cycled through for typing/inserting

// This is our main function - it runs our script.
const MatrixType = function(textElement, string, typeTime = 1000, itemIndex) {
  this.textElement = textElement;
  this.string = string;
  // We start off with empty elements
  this.text = '';
  // this.wordIndex = 0;
  this.typeTime = parseInt(typeTime, 10);
  this.itemIndex = itemIndex;
  this.typer();
  
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  // Split the string into an array of words
  // const mySentence = this.string.split(" ");
  // // set index to zero (start of sentence)
  // let currentIndex = 0;
  // // store current word in var
  // let currentWord = mySentence[currentIndex];
  
  // // add a character
  // this.text = currentWord.substring(0, this.text.length + 1);

  console.log(this.textElement);

  this.text = this.string.substring(0, this.text.length + 1);

  //output our current text - instert .text into element
  let test = 'class=txt'
  this.textElement.innerHTML = `<span ${test}>${this.text}</span>`;

  // Type Speed
  let typeSpeed = 300;

  // Check if the word is complete
  // if (this.text === currentWord) {
  //   // If the word is complete, we move on to the next word in our string.
  //   currentIndex++;
  //   console.log(currentIndex);
  // }
  
  if (this.text != this.string) {
    setTimeout(() => this.typer(), 500);
  } else {
    core++;
    if (core < strList.length) {
      new MatrixType(document.querySelector(elementList[core]), strList[core], 1000, core);
    }
  }

}

// Init once DOM Loads
document.addEventListener('DOMContentLoaded', init);

// Initialize the page
function init() {
  let textElement = document.querySelector(elementList[0]);
  let string = strList[0];
  let typeTime = 1000;
  // Initialize MatrixType
  new MatrixType(textElement, string, typeTime, 0);

  // for (let i = 0; i < strList.length; i++) {
  //   console.log(i)
  //   let textElement = document.querySelector(elementList[i]);
  //   let string = strList[i];
  //   let typeTime = 1000;
  //   // Initialize MatrixType
  //   new MatrixType(textElement, string, typeTime);
  // }
  

}