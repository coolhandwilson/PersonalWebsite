// I am using a tutorial about JS/DOM (that uses a type/untyper for a single word)
// and expanding off it in an effort to learn more about JS and working with the DOM.

// These variables store all of the strings that will be typed out by MatrixType/Typer
// const headOne = "Greetings, User."

const strList = [
  "wil@profile:~ user$ ",
  "Initializing...",
  "wil@profile:~ user$ ",
  "Complete...",
  "wil@profile:~ user$ ",
  "Securing packets from main hub."
]

const elementList = [
  "#TermOne",
  "#TermContentOne",
  "#TermTwo",
  "#TermContentTwo",
  "#TermOne",
  "#TermContentOne"
]

const linkList = ["Github", "LinkedIn", "Resume"]

// This is the global index variable that controls 
// which item of each above list is being used
let core = 0;

// This is the list of class names that will be cycled through for typing/inserting
classList = [
  'class=title-text',
  'class=txt'
]

// This is our main function - it runs our script.
const MatrixType = function(textElement, string, itemIndex) {
  this.textElement = textElement;
  this.string = string;
  // We start off with empty elements
  this.text = document.querySelector(elementList[core]).innerHTML;
  this.itemIndex = itemIndex;
  this.typer();
  
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  
  // // add a character
  // this.text = currentWord.substring(0, this.text.length + 1);
  if (strList[core] === "wil@profile:~ user$ ") {
    this.text = "wil@profile:~ user$ ";
  } else {
    this.text = this.string.substring(0, this.text.length + 1);
  }
  
  //output our current text - instert .text into element
  let test = 'class=txt'
  this.textElement.innerHTML = `<span ${test}>${this.text}</span>`;

  // Type Speed
  let typeSpeed = 200;

  // This is used to pace the typing to simulate a computer processing info
  // If the current character is a period, the type speed is slowed down to show
  // that information is 'loading'.
  if (this.text.charAt(this.text.length - 1) === '.') {
    typeSpeed = 1000;
  }

  if (this.text != this.string) {



    setTimeout(() => this.typer(), typeSpeed);

  } else {
    //
    core++;
    if (core < strList.length) {
      //Clear the DOM if terminal processes are 'complete' - simulate new screen
      if (this.text.includes("Complete")) {
        document.querySelectorAll(".container").forEach(content => content.innerHTML = "");  
      }

      new MatrixType(document.querySelector(elementList[core]), strList[core], core);
    }
  }

}

// Init once DOM Loads
document.addEventListener('DOMContentLoaded', init);

// Initialize the page
function init() {
  let textElement = document.querySelector(elementList[0]);
  let string = strList[0];

  // Initialize MatrixType
  new MatrixType(textElement, string, 0);

  

}