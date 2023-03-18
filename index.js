const form = document.getElementById (`form-register`);
const registerPage = document.getElementById (`players-name-page`);
const gamepage = document.getElementById (`game-page`);

const gameContainer = document.getElementById (`game-containers`)

const toolBar = document.querySelector (`#tool-bar`);
const firstPlayerImg = document.getElementById (`player-1-time`);
const secondPlayerImg = document.getElementById (`player-2-time`);
const nameAdd = document.getElementById (`player-name-add`);



form.addEventListener (`submit`, function (ev) {
  ev.preventDefault();

  const player1Name = document.querySelector (`#player1`).value;
  const player2Name = document.querySelector (`#player2`).value;


  registerPage.classList.remove (`show`);
  gamepage.classList.add (`appear`);
  firstPlayerImg.classList.add (`time-appear`);
  nameAdd.innerText = player1Name;


  function firstPlayerWin () {
    secondPlayerImg.classList.remove (`time-appear`)
    firstPlayerImg.classList.add (`time-appear`)
    nameAdd.innerText = `${player1Name} Win`
    nameAdd.style = `color:red; font-weight:bold`
    gameContainer.classList.remove  (`in`)
  }

  function secondPlayerWin () {
    firstPlayerImg.classList.remove (`time-appear`)
    secondPlayerImg.classList.add (`time-appear`)
    nameAdd.innerText = `${player2Name} Win`
    nameAdd.style = `color:green;font-weight:bold`
    gameContainer.classList.remove (`in`)
  }

  function playersDraw () {
    firstPlayerImg.classList.remove (`time-appear`)
    secondPlayerImg.classList.remove (`time-appear`)
    nameAdd.innerText = `Empate`
  }

  const gameButtons = document.querySelectorAll (`.style-board`);

  gameButtons.forEach (function clickButtons (ev) {
    ev.addEventListener (`click`, function gameAction () {
      const oneChoosed = document.querySelector (`#one`)
      const twoChoosed = document.getElementById (`two`)
      const threeChoosed = document.getElementById (`three`)
      const fourChoosed = document.getElementById (`four`)
      const fiveChoosed = document.querySelector (`#five`)
      const sixChoosed = document.getElementById (`six`)
      const sevenChoosed = document.getElementById (`seven`)
      const eightChoosed = document.getElementById (`eight`)
      const nineChoosed = document.querySelector  (`#nine`)

      if (ev.classList.contains (`X`) || ev.classList.contains (`O`)) {
        return
      }
      else if (firstPlayerImg.classList.contains (`time-appear`)) {
        ev.classList.add (`X`)
        firstPlayerImg.classList.remove (`time-appear`);
        nameAdd.innerText = player2Name;
        nameAdd.style = `color:white`
        secondPlayerImg.classList.add (`time-appear`);
        }
      else if (secondPlayerImg.classList.contains (`time-appear`)){
        ev.classList.add (`O`)
        secondPlayerImg.classList.remove (`time-appear`);
        nameAdd.innerText = player1Name;
        nameAdd.style = `color:white`
        firstPlayerImg.classList.add (`time-appear`);
      };

      if (oneChoosed.classList.contains (`X`) && fiveChoosed.classList.contains (`X`) && nineChoosed.classList.contains (`X`) || oneChoosed.classList.contains (`X`) && twoChoosed.classList.contains (`X`) && threeChoosed.classList.contains (`X`) || oneChoosed.classList.contains (`X`) && fourChoosed.classList.contains (`X`) && sevenChoosed.classList.contains (`X`) || twoChoosed.classList.contains (`X`) && fiveChoosed.classList.contains (`X`) && eightChoosed.classList.contains (`X`) || threeChoosed.classList.contains (`X`) && fiveChoosed.classList.contains (`X`) && sevenChoosed.classList.contains (`X`) || threeChoosed.classList.contains (`X`) && sixChoosed.classList.contains (`X`) && nineChoosed.classList.contains (`X`) || fourChoosed.classList.contains (`X`) && fiveChoosed.classList.contains (`X`) && sixChoosed.classList.contains (`X`) || sevenChoosed.classList.contains (`X`) && eightChoosed.classList.contains (`X`) && nineChoosed.classList.contains (`X`)) {
        firstPlayerWin()
      }
      else if (oneChoosed.classList.contains (`O`) && fiveChoosed.classList.contains (`O`) && nineChoosed.classList.contains (`O`) || oneChoosed.classList.contains (`O`) && twoChoosed.classList.contains (`O`) && threeChoosed.classList.contains (`O`) || oneChoosed.classList.contains (`O`) && fourChoosed.classList.contains (`O`) && sevenChoosed.classList.contains (`O`) || twoChoosed.classList.contains (`O`) && fiveChoosed.classList.contains (`O`) && eightChoosed.classList.contains (`O`) || threeChoosed.classList.contains (`O`) && fiveChoosed.classList.contains (`O`) && sevenChoosed.classList.contains (`O`) || threeChoosed.classList.contains (`O`) && sixChoosed.classList.contains (`O`) && nineChoosed.classList.contains (`O`) || fourChoosed.classList.contains (`O`) && fiveChoosed.classList.contains (`O`) && sixChoosed.classList.contains (`O`) || sevenChoosed.classList.contains (`O`) && eightChoosed.classList.contains (`O`) && nineChoosed.classList.contains (`O`)) {
        secondPlayerWin()
      }
    });
    const resetButton = document.getElementById (`button-reset`)
    resetButton.addEventListener (`click`,function () {
      gameContainer.classList.add (`in`)
      gameButtons.forEach (function (ev) {
        ev.classList.remove (`X`)
        ev.classList.remove (`O`)
      })
      firstPlayerImg.classList.add (`time-appear`)
      secondPlayerImg.classList.remove (`time-appear`)
      nameAdd.innerText = player1Name
      nameAdd.style = `color:white`
      clickButtons ()
    } )
  });
});




