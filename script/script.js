
'use strict';

function guessTheNumber() {

  let num = Math.ceil(Math.random() * 100);

  let persNum = prompt('Угадай число от 1 до 100, осталось попыток - 10');

  let n = 10;

  function startGame() {

    if (!isNaN(parseFloat(persNum)) && isFinite(persNum)) {
        n--;
        let ques,
            newStart;

        if (persNum > num && n > 0) {
          ques = confirm('Загаданное число меньше, осталось попыток - ' + n + '  Продолжим?');
        } else if (persNum < num && n > 0) {
          ques = confirm('Загаданное число больше, осталось попыток - ' + n + '  Продолжим?');
        } else if (n > 0) {
          newStart = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (newStart === true) {
            return guessTheNumber();
          }
        } else {
          newStart = confirm('Ваши попытки закончились, хотите играть заново?');
          if (newStart === true) {
          return guessTheNumber();
          }
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





