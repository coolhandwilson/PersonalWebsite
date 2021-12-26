// const body = document.body;


// let headOne = document.createElement('h1');
// let str = "Greetings, User.";

// for (let i in str) {

//   setTimeout(function () {
//     headOne.innerText += str[i];
//     console.log(headOne)
//     header.appendChild(headOne);
//   }, 1000);
// }

/*Building off of online tutorials */
const headOne = "Greetings, User."

const MatrixType = function(textElement, string, typeTime = 1000) {
  this.textElement = textElement;
  this.string = string;
  this.text = '';
  this.letterIndex = 0;
  this.typeTime = parseInt(typeTime, 10);
  this.typer();
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  // Split the string into an array of words
  const mySentence = this.string.split("");
  console.log(mySentence)


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