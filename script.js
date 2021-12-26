const body = document.body;
const header = document.querySelector('header');

let headOne = document.createElement('h1');
let str = "Greetings, User.";

for (let i in str) {

  setTimeout(function () {
    headOne.innerText += str[i];
    console.log(headOne)
    header.appendChild(headOne);
  }, 1000);
}

