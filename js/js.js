"use strict";
//(QUESTION 1)
var age;
age = confirm("I am 20 years old")
if (age === true) {
  document.getElementById("1").innerHTML = "Correct";
}
else {
  document.getElementById("1").innerHTML = "Incorrect";
}

//(QUESTION 2)
var eyes;
eyes = confirm("I have blue eyes")
if (eyes === true) {
  document.getElementById("2").innerHTML = "Correct";
}
else {
  document.getElementById("2").innerHTML = "Incorrect";
}

//(QUESTION 3)
var piano;
piano = confirm("I can play piano")
if (piano === false) {
  document.getElementById("3").innerHTML = "Correct";
}
else {
  document.getElementById("3").innerHTML = "Incorrect";
}

//(QUESTION 4)
var pets;
pets = confirm("I have no pets")
if (pets === true) {
  document.getElementById("4").innerHTML = "Correct";
}
else {
  document.getElementById("4").innerHTML = "Incorrect";
}

//(QUESTION 5) 
var track;
track = confirm("I ran track in highschool")
if (track === true) {
  document.getElementById("5").innerHTML = "Correct";
}
else {
  document.getElementById("5").innerHTML = "Incorrect";
}

//(QUESTION 6) 
for ( var i=0; i<=4; i++) {
  var input = parseInt(prompt("my number in between 1 & 10"));
  if (input < 9) {
    alert ("higher");
  }
  else if (input > 9) {
    alert ("lower");
  }
  else if (input === 9) {
    alert ("correct");
    var correct = true;
  }
  if (correct) {
    
    break;
  }
}

//(QUESTION 7) 
for ( var i=0; i<=6; i++) {
  correct = false
  var input1 = prompt("name one month");
  if (input1 !== "january" || "febuary" || "march" ) {
    alert ("Try again");
  }
  else if (input1 == "january" || "febuary" || "march" ) {
    alert ("correct");
    var correct = true;
  }
  if (correct) {
    
    break;
  }
}