
'use strict';

function guessTheNumber() {

  let num = Math.ceil(Math.random() * 100);

  let persNum = prompt('Угадай число от 1 до 100');

  function startGame() {
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
          persNum = (prompt('Введи число!'));
          return startGame();
        }
    } else {
      persNum = (prompt('Введи число!'));
      return startGame();
    } 
  }
 return startGame();
}

const persVar = guessTheNumber();





