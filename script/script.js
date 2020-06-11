
'use strict';

// let num = Math.ceil(Math.random() * 100);
// console.log(num);

// let persNum = prompt('Угадай число от 1 до 100');

// function guessTheNumber(a) {

//   if (!isNaN(parseFloat(a)) && isFinite(a)) {
//       let ques;
//       if (a > num) {
//         ques = confirm('Загаданное число меньше, попробовать ещё?');
//       } else if (a < num) {
//         ques = confirm('Загаданное число больше, попробовать ещё?');
//       } else {
//         alert('Поздравляю, Вы угадали!!!');
//       }
//       if (ques === true) {
//         return guessTheNumber(prompt('Введи число!'));
//       }
//   } else {
//     return guessTheNumber(prompt('Введи число!'));
//   } 
// }

// guessTheNumber(persNum);



function guessTheNumber() {

  let num = Math.ceil(Math.random() * 100);
  console.log(num);

  let persNum = prompt('Угадай число от 1 до 100');

  return function() {
    if (!isNaN(parseFloat(persNum)) && isFinite(persNum)) {
      let ques;
      if (persNum > num) {
        ques = confirm('Загаданное число меньше, попробовать ещё?');
      } else if (persNum < num) {
        ques = confirm('Загаданное число больше, попробовать ещё?');
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
      if (ques === true) {
        persNum = prompt('Введи число!');
      }
    } else {
      persNum = prompt('Введи число!');
    } 
    return persNum;
  };

}

const persVar = guessTheNumber();
persVar();
persVar();
persVar();
console.log(persVar);





