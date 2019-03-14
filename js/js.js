"use strict";
//(QUESTION 1)
function yesNoQuestions(correctAnswer, question) {
  var answer = confirm(question);
  if(answer===correctAnswer) {
    alert('Correct');
  }
  else{
    alert('Incorrect');
  }
}

yesNoQuestions(true, 'I am 20 years old');
yesNoQuestions(true, 'I have blue eyes');
yesNoQuestions(false, 'I can play piano');
yesNoQuestions(true, 'I have no pets');
yesNoQuestions(false, 'I ran track in highschool');
questionSix();
questionSeven();

//(QUESTION 6) 
function questionSix(){
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
}
//(QUESTION 7) 
function questionSeven() {
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
}