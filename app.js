'use strict';

console.log('hello world');

alert('Want to play a game? It\'ll be fun, I PROMISE!');
alert('I\'m going to ask you a series of questions, you MUST answer correctly. Your life depends on it!');
alert('Just kidding...');
alert('Or AM I???');

var user = prompt('First question: What is your name?').toUpperCase();
console.log(user);
alert('Thank you for playing with me, ' + user);

var question2 = prompt('Next question: ' + user + 'Do you think I, the wonderful and magnificent Britini, lift weights? Answer with a yes or no. OR ELSE!').toLowerCase();
console.log(question2);
if (question2 === 'yes' || question2 === 'y') {
  //
} else if (question2 === 'no' || question2 === 'n') {
  //
} else {
  //
}
