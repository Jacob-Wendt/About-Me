"use strict";
//(QUESTION 1)
var age;
age = confirm("I am 20 years old")
if (age === true) {
  console.log ("correct");
}
else {
  console.log ("false");
}

//(QUESTION 2)
var eyes;
eyes = confirm("I have blue eyes")
if (eyes === true) {
  console.log ("correct");
}
else {
  console.log ("false");
}

//(QUESTION 3)
var piano;
piano = confirm("I can play piano")
if (piano === false) {
  console.log ("correct");
}
else {
  console.log ("false");
}

//(QUESTION 4)
var pets;
pets = confirm("I have no pets")
if (pets === true) {
  console.log ("correct");
}
else {
  console.log ("false");
}

//(QUESTION 5) 
var track;
track = confirm("I ran track in highschool")
if (track === true) {
  console.log ("correct");
}
else {
  console.log ("false");
}

//(QUESTION 6) 
var input = prompt("Guess my number")
for (input = 0; input = 9;) {
  if (input == 9) {
    console.log ("correct!")
  }
  else if (input<9) {
    console.log ("Higher")
  }
  else if (input>9) {
    console.log ("Lower")
  }
}
//(QUESTION 7) 
var array = []
      