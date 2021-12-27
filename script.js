// I am using a tutorial about JS/DOM (that uses a type/untyper for a single word)
// and expanding off it in an effort to learn more about JS and working with the DOM.

// These variables store all of the strings that will be typed out by MatrixType/Typer

// Initial page and element output
const strList = [
  "wil@profile:~ user$ ",
  "Initializing profile creation protocol... ",
  "wil@profile:~ user$ ",
  "Complete! ",
  "wil@profile:~ user$ ",
  "Securing data packets from main hub... ",
  "wil@profile:~ user$ ",
  "Unpacking data packets... ",
  "wil@profile:~ user$ ",
  "Making cup of coffee... ",
  "wil@profile:~ user$ ",
  "Processing data...",
  "wil@profile:~ user$ ",
  "Finished processing. Initializing UI... ",
  "wil@profile:~ user$ ",
  "Page initialization complete! "
]

const elementList = [
  "#TermOne",
  "#TermContentOne",
  "#TermTwo",
  "#TermContentTwo",
  "#TermOne",
  "#TermContentOne",
  "#TermTwo",
  "#TermContentTwo",
  "#TermThree",
  "#TermContentThree",
  "#TermFour",
  "#TermContentFour",
  "#TermFive",
  "#TermContentFive",
  "#TermSix",
  "#TermContentSix",
]

// Main Page Text and Element outputs
const pageContents = [

]

const pageElements = [

]

//List of element lists
const outputs = [
  strList,
  pageContents
]

const htmlElements = [
  elementList,
  pageElements
]

// const mainPageElements = [
//   "#TermOne",
//   "#TermContentOne",
// ]

const linkList = ["Github", "LinkedIn", "Resume"]

//main list index number
let mainListIndex = 0;

// This is the global index variable that controls 
// which item of each inner list is being used
let contentIndex = 0;

// This is the list of class names that will be cycled through for typing/inserting
classList = [
  'class=title-text',
  'class=txt'
]

// This is our main function - it runs our script.
const MatrixType = function(textElement, string) {
  this.textElement = textElement;
  this.string = string;
  // Grab contents of .container class spans
  this.text = document.querySelector(elementList[contentIndex]).innerHTML;
  this.typer();
  
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  
  // No typing effect for terminal prompt text
  if (strList[contentIndex] === "wil@profile:~ user$ ") {
    this.text = "wil@profile:~ user$ ";

  } else {
    this.text = this.string.substring(0, this.text.length + 1);
  }
  
  //output our current text - instert .text into element with class
  let elementClass = 'class=txt'
  this.textElement.innerHTML = `<span ${elementClass}>${this.text}</span>`;

  // Type Speed
  let typeSpeed = 100;

  // This is used to pace the typing to simulate a computer processing info
  // If the current character is a period, the type speed is slowed down to show
  // that information is 'loading'.
  if (this.text.charAt(this.text.length - 1) === '.') {
    typeSpeed = 1000;

  //Add whitespace character after '!' to simulate processing time before screen wipe
  } else if (this.text.charAt(this.text.length - 1) === '!') {
    typeSpeed = 2000;
  }

  if (this.text != this.string) {



    setTimeout(() => this.typer(), typeSpeed);

  } else {
    //
    contentIndex++;
    if (contentIndex < strList.length) {
      //Clear the DOM if terminal processes are 'complete' - simulate new screen
      if (this.text.includes("omplete")) {
        document.querySelectorAll(".container").forEach(content => content.innerHTML = "");  
      }

      new MatrixType(document.querySelector(elementList[contentIndex]), strList[contentIndex]);
    }
  }

}

// Init once DOM Loads
document.addEventListener('DOMContentLoaded', init);

// Initialize the page
function init() {
  let textElement = document.querySelector(htmlElements[mainListIndex][contentIndex]);
  let string = outputs[mainListIndex][contentIndex];

  // Initialize MatrixType
  new MatrixType(textElement, string);

  

}