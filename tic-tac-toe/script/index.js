const buttons = document.querySelectorAll('.option');
//count of move
  let cont = 0;
// a tie
  let end = document.querySelector('.end');
// User winner
  let userWinner = document.querySelector('.winner')
// Button reset game
  const resetButton = document.querySelector('.reset')



let array = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let countXWin = 0
let countOWin = 0
let countParty = 0

let xWin = document.querySelector('.x-win');
let oWin = document.querySelector('.o-win');
let numberParty = document.querySelector('.number-party');
let tie = document.querySelector('.number-tie');



function refresScoreBoard() {
  let countTie = countParty - (countXWin + countOWin)
  oWin.innerHTML = countOWin;
  xWin.innerHTML = countXWin;
  numberParty.innerHTML = countParty;
  tie.innerHTML = countTie;

}

buttons.forEach(item => {
  item.addEventListener('click', () => {
    if (cont % 2 == 0) {
      item.innerHTML = "X";
      item.disabled = true;
      item.style.backgroundColor  = "#ff4040";
      item.style.color  = "white";
      switch (item.className[0]) {
        case '1':
          array[0][0] = 'x'
          break;
        case '2':
          array[0][1] = 'x'
          break;
        case '3':
          array[0][2] = 'x'
          break;
        case '4':
          array[1][0] = 'x'
          break;
        case '5':
          array[1][1] = 'x'
          break;
        case '6':
          array[1][2] = 'x'
          break;
        case '7':
          array[2][0] = 'x'
          break;
        case '8':
          array[2][1] = 'x'
          break;
        case '9':
          array[2][2] = 'x'
          break;

      }
      cont++

      winner(array);

    } else if(cont % 2 != 0){   
      item.innerHTML = "O"
      item.disabled = true;
      item.style.backgroundColor  = "#00ffff";
      item.style.color  = "black";
      switch (item.className[0]) {
        case '1':
          array[0][0] = 'o'
          break;
        case '2':
          array[0][1] = 'o'
          break;
        case '3':
          array[0][2] = 'o'
          break;
        case '4':
          array[1][0] = 'o'
          break;
        case '5':
          array[1][1] = 'o'
          break;
        case '6':
          array[1][2] = 'o'
          break;
        case '7':
          array[2][0] = 'o'
          break;
        case '8':
          array[2][1] = 'o'
          break;
        case '9':
          array[2][2] = 'o'
          break;
        }
      cont++

      winner(array);

    }
  })
})

function verify(cont) {
  if (cont == 9) {
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard();
    userWinner.innerHTML = 'Empate'

  }
}

function winner(array) {
  // X winner  line 1 -> <- 
  if (array[0][0] == 'x' && array[0][1] == 'x' && array[0][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[0].style.border = '2px solid yellow'
    buttons[1].style.border = '2px solid yellow'
    buttons[2].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;

  }
  // X winner  line 2 -> <- 
  else if (array[1][0] == 'x' && array[1][1] == 'x' && array[1][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[3].style.border = '2px solid yellow'
    buttons[4].style.border = '2px solid yellow'
    buttons[5].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner  line 3 -> <- 
  else if (array[2][0] == 'x' && array[2][1] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[6].style.border = '2px solid yellow'
    buttons[7].style.border = '2px solid yellow'
    buttons[8].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 1
  else if (array[0][0] == 'x' && array[1][0] == 'x' && array[2][0] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[0].style.border = '2px solid yellow'
    buttons[3].style.border = '2px solid yellow'
    buttons[6].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 2
  else if (array[0][1] == 'x' && array[1][1] == 'x' && array[2][1] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[1].style.border = '2px solid yellow'
    buttons[4].style.border = '2px solid yellow'
    buttons[7].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner column 3
  else if (array[0][2] == 'x' && array[1][2] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[2].style.border = '2px solid yellow'
    buttons[5].style.border = '2px solid yellow'
    buttons[8].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner \
  else if (array[0][0] == 'x' && array[1][1] == 'x' && array[2][2] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[0].style.border = '2px solid yellow'
    buttons[4].style.border = '2px solid yellow'
    buttons[8].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // X winner /
  else if (array[0][2] == 'x' && array[1][1] == 'x' && array[2][0] == 'x') {
    userWinner.innerHTML = "X venceu"
    buttons[2].style.border = '2px solid yellow'
    buttons[4].style.border = '2px solid yellow'
    buttons[6].style.border = '2px solid yellow'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countXWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }

  // O winner  line 1 -> <- 
  else if (array[0][0] == 'o' && array[0][1] == 'o' && array[0][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[0].style.border = '2px solid blue'
    buttons[1].style.border = '2px solid blue'
    buttons[2].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // O winner  line 2 -> <- 
  else if (array[1][0] == 'o' && array[1][1] == 'o' && array[1][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[3].style.border = '2px solid blue'
    buttons[4].style.border = '2px solid blue'
    buttons[5].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner  line 3 -> <- 
  else if (array[2][0] == 'o' && array[2][1] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[6].style.border = '2px solid blue'
    buttons[7].style.border = '2px solid blue'
    buttons[8].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 1
  else if (array[0][0] == 'o' && array[1][0] == 'o' && array[2][0] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[0].style.border = '2px solid blue'
    buttons[3].style.border = '2px solid blue'
    buttons[6].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 2
  else if (array[0][1] == 'o' && array[1][1] == 'o' && array[2][1] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[1].style.border = '2px solid blue'
    buttons[4].style.border = '2px solid blue'
    buttons[7].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner column 3
  else if (array[0][2] == 'o' && array[1][2] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[2].style.border = '2px solid blue'
    buttons[5].style.border = '2px solid blue'
    buttons[8].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner \
  else if (array[0][0] == 'o' && array[1][1] == 'o' && array[2][2] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[0].style.border = '2px solid blue'
    buttons[4].style.border = '2px solid blue'
    buttons[8].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  }
  // o winner /
  else if (array[0][2] == 'o' && array[1][1] == 'o' && array[2][0] == 'o') {
    userWinner.innerHTML = "O venceu"
    buttons[2].style.border = '2px solid blue'
    buttons[4].style.border = '2px solid blue'
    buttons[6].style.border = '2px solid blue'
    buttons.forEach(item => {
      item.disabled = true;
    })
    countOWin++;
    countParty++;
    resetButton.innerHTML = "New Game";
    refresScoreBoard()
    return true;
  } else {
    return verify(cont);
  }

}

resetButton.addEventListener('click', () => {
  reset()
})

function reset() {
  array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  buttons.forEach(item => {
    item.innerHTML = ""
    item.disabled = false
    item.style.backgroundColor  = "white";
    item.style.border  = "none";
  })

  userWinner.innerHTML = "-"
  cont = 0;
  end.innerHTML = "";
  resetButton.innerHTML = "Reset Game"
}
