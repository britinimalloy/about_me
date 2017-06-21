'use strict';

console.log('hello world');

var user = prompt('First question: What is your name?').toUpperCase();
console.log(user);
var keepCount = 0;
var userGuesses;

alert('Want to play a game? It\'ll be fun, I PROMISE!');
alert('I\'m going to ask you a series of questions, you MUST answer correctly. Your life depends on it!');
alert('Just kidding...');
alert('Or AM I???');

var questions = [
  'Next question: ' + user + ', Do you think I, the wonderful and magnificent Britini, lift weights? Answer with a yes or no. OR ELSE!',
  'Second yes or no answered question, ' + user + ': do you think I do cardio?',
  user + ', do you think I can back squat more than my body weight?',
  user + ', are you under the illusion that I like to run?',
  user + ', here\'s your final question: is core day my favorite day?'
];

var answers = ['y', 'n', 'y', 'n', 'y'];

var responses = [
  [
    user + ', you are correct! Congratulations, you get to live for another round.',
    user + ', you are correct! Congratulations, you get to live for the 3rd round. I don\'t like cardio',
    user + ', you are correct! Congratulations, you get to live for the 4th round.',
    user + ', you are correct! Congratulations, you get to live for the final round because you listen.',
    user + ', you are correct! Congratulations, you made it through the game alive!'
  ],
  [
    user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...',
    user + ', you are incorrect! Watch it, too many wrong answers and you may not live through this game...just like I don\'t when forced to do cardio',
    user + ', you are incorrect! Watch it, I don\'t like to be insulted!',
    user + ', don\'t you listen?? I HATE CARDIO!!!',
    user + ', you are incorrect! I\'m not sure what to do with you...'
  ],
  [
    user + ', you are terrible at following instructions. I will take mercy for now, DON\'T SCREW UP AGAIN!!',
    user + ', you are terrible at following instructions. I have told you, I may not take mercy on you, DON\'T SCREW UP AGAIN!!',
    user + ', you are terrible at following instructions. I am getting irritated with you...',
    user + ', you are horrendous at following instructions. I am just about done with your lack of listening!',
    user + ', this is the end of the game! PREPARE TO DIE!!'
  ]
];

function askQuestion () {
  for (var i = 0; i < questions.length; i++) {
    userGuesses = prompt(questions[i]);
    console.log(questions[i],'/',userGuesses);
    if(!userGuesses) {
      alert(responses[2][i]);
//      keepCount--;
    } else {
      userGuesses = userGuesses.toLowerCase();
      if (userGuesses === 'yes') {
        userGuesses = 'y';
      }
      if (userGuesses === 'no') {
        userGuesses = 'n';
      }
      if (userGuesses === answers[i]) {
        alert(responses[0][i]);
        keepCount++;
      } else {
        alert(responses[1][i]);
//        keepCount--;
      }
    }
  }
}

askQuestion();

var myAnswer = 5;
var question7;

gameCounter(4);

function gameCounter (numberOfGuesses) {
  for (var ii = 1; ii <= numberOfGuesses; ii++) {
    question7 = parseInt(prompt('Next question: ' + user + ', can you guess my favorite number? You have ' + (numberOfGuesses - ii + 1) + ' guesses remaining.'));
    console.log(question7);
    console.log(ii);
    if (question7 === myAnswer) {
      alert('Yay! You got it correct!');
      console.log('Yay it is correct!');
      keepCount++;
      break;
    }
    if (ii === 4) {
      alert(user + ', you have guessed incorrectly 4 times. You are done.');
      break;
    }
    if (isNaN(question7)) {
      console.log(question7 + ' is not a number');
      alert('Pick a number dummy!');
    } else if (question7 > 5) {
      console.log(question7 + ' pick a lower number');
      alert('That is wrong, pick a lower number.');
    } else if (question7 < 5) {
      console.log(question7 + ' pick a higher number');
      alert('That is wrong, pick a higher number.');
    }
  }
}

var animals = ['dog', 'cat', 'horse'];
getAnimal(6);

function getAnimal (guesses) {
  for (var ii = 1; ii <= guesses; ii++) {
    var animalGuess = prompt('What animal do you think I have ever owned before?');
    console.log(animalGuess);
    if (animals.includes(animalGuess)) {
      keepCount++;
      alert('Correct!');
      break;
    }
  }
}
console.log(keepCount);
alert(user + ', you earned ' + keepCount + ' out of a possible 7.');
