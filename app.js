'use strict';

console.log('hello world');

alert('Want to play a game? It\'ll be fun, I PROMISE!');
alert('I\'m going to ask you a series of questions, you MUST answer correctly. Your life depends on it!');
alert('Just kidding...');
alert('Or AM I???');

var user = prompt('First question: What is your name?').toUpperCase();
console.log(user);
alert('Thank you for playing with me, ' + user);

var question2 = prompt('Next question: ' + user + ', Do you think I, the wonderful and magnificent Britini, lift weights? Answer with a yes or no. OR ELSE!').toLowerCase();
console.log(question2);
if (question2 === 'yes' || question2 === 'y') {
  alert(user + ', you are correct! Congratulations, you get to live for another round.');
} else if (question2 === 'no' || question2 === 'n') {
  alert(user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...');
} else {
  alert(user + ', you are terrible at following instructions. I will take mercy for now, DON\'T SCREW UP AGAIN!!');
}

var question3 = prompt('Second yes or no answered question, ' + user + ': do you think I do cardio?').toLowerCase();
console.log(question3);
if (question3 === 'no' || question3 === 'n') {
  alert(user + ', you are correct! Congratulations, you get to live for another round. I don\'t like cardio');
} else if (question3 === 'yes' || question3 === 'y') {
  alert(user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...just like I don\'t when forced to do cardio');
} else {
  alert(user + ', you are terrible at following instructions. I have told you, I may not take mercy on you, DON\'T SCREW UP AGAIN!!');
}

var question4 = prompt('').toLowerCase();
console.log(question4);
if (question4 === 'yes' || question4 === 'y') {
  // alert(user + ', you are correct! Congratulations, you get to live for another round.');
} else if (question4 === 'no' || question4 === 'n') {
  // alert(user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...');
} else {
  // alert(user + ', you are terrible at following instructions. I will take mercy for now, DON'T SCREW UP AGAIN!!');
}

var question5 = prompt('').toLowerCase();
console.log(question5);
if (question5 === 'no' || question5 === 'n') {
  // alert(user + ', you are correct! Congratulations, you get to live for another round.');
} else if (question5 === 'yes' || question5 === 'y') {
  // alert(user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...');
} else {
  // alert(user + ', you are terrible at following instructions. I will take mercy for now, DON'T SCREW UP AGAIN!!');
}

var question6 = prompt('').toLowerCase();
console.log(question6);
if (question6 === 'yes' || question6 === 'y') {
  // alert(user + ', you are correct! Congratulations, you get to live for another round.');
} else if (question6 === 'no' || question6 === 'n') {
  // alert(user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...');
} else {
  // alert(user + ', you are terrible at following instructions. I will take mercy for now, DON'T SCREW UP AGAIN!!');
}
