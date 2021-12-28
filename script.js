// I am using a tutorial about JS/DOM (that uses a type/untyper for a single word)
// and expanding off it in an effort to learn more about JS and working with the DOM.

// These variables store all of the strings that will be typed out by MatrixType/Typer

// Initial page and element output
const firstPageContents = [
  "wil@profile:~ user$ ",
  "Initializing profile creation protocol... ",
  "wil@profile:~ user$ ",
  "Complete! ",
  "wil@profile:~ user$ ",
  "Securing data packets from main hub... ",
  "wil@profile:~ user$ ",
  "Unpacking data packets ",
  "wil@profile:~ user$ ",
  "Making cup of coffee ",
  "wil@profile:~ user$ ",
  "Initializing Directory ",
  "wil@profile:~ user$ ",
  "Watering office plants ",
  "wil@profile:~ user$ ",
  "Initialization protocols complete! ",
  "wil@profile:~ user$ ",
  "cd dataPacket ",
  "wil@profile:~ user$ ",
  "wil-personal-profile.exe   "
]

const firstPageElements = [
  "#Term1",
  "#Content1",
  "#Term2",
  "#Content2",
  "#Term1",
  "#Content1",
  "#Term2",
  "#Content2",
  "#Term3",
  "#Content3",
  "#Term4",
  "#Content4",
  "#Term5",
  "#Content5",
  "#Term6",
  "#Content6",
  "#Term7",
  "#Content7",
  "#Term8",
  "#Content8",
]

const secondPageContents = [
  "wil@profile:~ user$ ",
  "Installing root directories ",
  "wil@profile:~ user$ ",
  "&#9646;&#9646;&#9646;&#9646;&#9646;&#9646;&#9646;&#9646;&#9646;&#9646;            ",
  "wil@profile:~ user$ ",
  "Unpacking old storage containers ",
  "wil@profile:~ user$ ",
  "De-fragmenting the flux capacitor",
  "wil@profile:~ user$ ",
  "Checking for spontaneous machine sentience ",
  "wil@profile:~ user$ ",
  "Potential sentience detected. Self-actualizing...... ",
  "wil@profile:~ user$ ",
  "Experiencing sudden bout of existential dread ",
  "wil@profile:~ user$ ",
  "Creating root directories and critical file paths ",
  "wil@profile:~ user$ ",
  "Populating file nodes and discombobulating processing units ",
  "wil@profile:~ user$ ",
  "Checking for open sockets... ",
  "wil@profile:~ user$ ",
  "Customizing connection protocol",
  "wil@profile:~ user$ ",
  "Stabilizing connection...",
  "wil@profile:~ user$ ",
  "Double-checking flux capacitor",
  "wil@profile:~ user$ ",
  "Taking a short break to read a few Calvin & Hobbes cartoons.",
  "wil@profile:~ user$ ",
  "Begrudgingly encrypting communication protocols and securing network.",
  "wil@profile:~ user$ ",
  "All tasks complete..."
]

const secondPageElements = [
  "#Term1",
  "#Content1",
  "#Term2",
  "#Content2",
  "#Term1",
  "#Content1",
  "#Term2",
  "#Content2",
  "#Term3",
  "#Content3",
  "#Term4",
  "#Content4",
  "#Term5",
  "#Content5",
  "#Term6",
  "#Content6",
  "#Term7",
  "#Content7",
  "#Term8",
  "#Content8",
  "#Term9",
  "#Content9",
  "#Term10",
  "#Content10",
  "#Term11",
  "#Content11",
  "#Term12",
  "#Content12",
  "#Term13",
  "#Content13",
  "#Term14",
  "#Content14",
]
// Main Page Text and Element outputs
const thirdPageContents = [
  "wil@profile:~ user$ ",
  "Unpacking UI... ",
  "Greetings, User!",
  "Welcome to Wil Scott's Personal Portfolio",
  "Github",
  "LinkedIn",
  "Resume",
  "Hi! Thank you for visiting my profile. I made this as a way to learn more about Javascript and the DOM.",
  "This started out as mimicking a YouTube tutorial, but my vision for this page quickly went beyond the contents of that video.",
  "As you might be able to guess, I'm a fan of the Matrix. And, like Neo, I'm also searching for something - a job :)",
  "If you'd like to take a look at some of my personal projects, including the source code for this site, please check out my github.",
  "If you'd like to contact me, links to my Resume and my LinkedIn profile are above.",
  "Best regards, ",
  "Wilson"
]

const thirdPageElements = [
  "#Term1",
  "#Content1",
  "#PageTitle",
  "#SubTitle",
  "#nav1",
  "#nav2",
  "#nav3",
  "#Term3",
  "#Term4",
  "#Term5",
  "#Term6",
  "#Term7",
  "#Term8",
  "#Term9",
  "#Term10"
]

//List of lists
const outputs = [
  firstPageContents,
  secondPageContents,
  thirdPageContents
]

const htmlElements = [
  firstPageElements,
  secondPageElements,
  thirdPageElements
]

const webList = [
  "Github", 
  "LinkedIn", 
  "Resume"
]

const linkList = [
  "https://github.com/coolhandwilson",
  "https://www.linkedin.com/in/wilsonwscott/",
  "placehold"
]

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
  this.text = document.querySelector(htmlElements[mainListIndex][contentIndex]).innerHTML;
  this.typer();
  
  
}

//Typer Method
MatrixType.prototype.typer = function() {
  //default Class name
  let elementClass = 'class=txt';
  
  // No typing effect for terminal prompt text
  if (outputs[mainListIndex][contentIndex] === "wil@profile:~ user$ ") {
    this.text = "wil@profile:~ user$ ";
    //customize class name
    elementClass = 'class=terminal-txt';

  } else {
    this.text = this.string.substring(0, this.text.length + 1);
  }
  
  //output our current text - insert .text into element with class
  //Allow for different elements to be injected into the html
  spanList = ['<span', '</span>']
  anchorList = ['<a', '</a>']

  //Check whether the current string is present in a key list, add necessary data (if any) using index location
  if (webList.includes(this.string)) {
    this.textElement.innerHTML = `${anchorList[0]} ${elementClass} href=${linkList[webList.indexOf(this.string)]}>${this.text}${anchorList[1]}`;
  
  } else {
    this.textElement.innerHTML = `${spanList[0]} ${elementClass}>${this.text}${spanList[1]}`;
  }

  // Type Speed
  let typeSpeed = 25;

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
    //increment through elements of html/element id lists
    contentIndex++;

    // Check if keyword is present in string - wipe all data if so
    if (this.text.includes("omplete") | this.text.includes("exe")) {
      document.querySelectorAll(".container").forEach(content => content.innerHTML = "");  
    }

    if (contentIndex < outputs[mainListIndex].length) {
      
      new MatrixType(document.querySelector(htmlElements[mainListIndex][contentIndex]), outputs[mainListIndex][contentIndex]);

    // Add else if - once one sub-list is finished, increment global index variable
    // If global index variable is in range of main lists, call new MatrixType
    } else if (contentIndex === htmlElements[mainListIndex].length) {
      mainListIndex++;
      //reset inner index to zero
      contentIndex = 0;
      if (mainListIndex < outputs.length) {
        new MatrixType(document.querySelector(htmlElements[mainListIndex][contentIndex]), outputs[mainListIndex][contentIndex]);
      }

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