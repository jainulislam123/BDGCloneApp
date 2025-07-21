const gameBox = document.querySelectorAll(".WinGoSec .box");
let clicked = 1;
gameBox.forEach((Gbox) => {
  Gbox.addEventListener("click", () => {
    gameBox.forEach((box) => {
      box.classList.add("Uncolor");
      box.classList.remove("color");
    });
    Gbox.classList.add("color");
    Gbox.classList.remove("Uncolor");
  });
});

const GamePop = document.querySelector(".paddingModal");

function rule() {
  GamePop.classList.add("Slidpoping");
}

function gotIt() {
  GamePop.classList.remove("Slidpoping");
  GamePop.classList.add("paddingModal");
}

//!----------------------------------------------------
let audio = new Audio("/music.mp3");
let support = document.querySelectorAll(".support span");

support[0].addEventListener("click", () => {
  support[0].style.display = "none";
  support[1].style.display = "inline-block";
  audio.pause();
});
support[1].addEventListener("click", () => {
  support[1].style.display = "none";
  support[0].style.display = "inline-block";
});

const Sec30WingImg = document.querySelector("#Sec30Wing");

const timmerCountDown = document.querySelector(".timmerCountDown");
const singleTbody = document.querySelector("tbody");
const tbody = document.querySelector("tbody tr:nth-child(2)");
const proces = document.querySelector("tbody tr:nth-child(1)");

const boxes = document.querySelectorAll(".chartDisplay .boxNumber");

//~-----------------------randomMethod---------------------

//!------------------------------------
let count = 30;
let userGuess = null;
let result;
let background;
function setGuess(guess) {
  userGuess = guess;
}

function startCountdown() {
  const win30Count = document.querySelector(".sec");
  const resultEl = document.getElementById("result");

  setInterval(() => {
    win30Count.textContent = count;
    if (count <= 20) {
      singleTbody.prepend(proces);
    }
    if (count < 10) {
      win30Count.innerText = `0${count}`;
    }

    timmerCountDown.innerText = count;
    if (count < 10) {
      timmerCountDown.innerText = `0${count}`;
    }
    if (count == 5) {
      timmerCountDown.classList.add("timerPop");
      audio.play();
    }
    if (count == 0) {
      timmerCountDown.classList.remove("timerPop");
      document.querySelector(".chartsNumber").innerHTML = "202507171818";
      proces.remove();
    }
    count--;

    if (count < 0) {
      const randomNum = Math.round(Math.random() * 9);
      const actualResult = randomNum < 6 ? "Small" : "Big";

      if (userGuess === null) {
        boxes.forEach((box) => {
          box.classList.remove("red");
          box.classList.remove("green");
          box.classList.remove("aqua");
        });
        switch (randomNum) {
          case 0:
            background = "aqua";
            style = `
  background: -webkit-linear-gradient(top, #e1551eff 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("aqua");

            break;
          case 1:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 2:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 3:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 4:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 5:
            background = "aqua";
            style = `
  background: -webkit-linear-gradient(top, #40ad72 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("aqua");
            break;
          case 6:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 7:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 8:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 9:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;

          default:
            break;
        }

        if (randomNum >= 5) {
          result = "Big";
        } else {
          result = "Small";
        }

        tbody.innerHTML = `<td>202507151149</td>
                <td style="${style}">${randomNum}</td>
                <td>${result}</td>
                <td>
                <span class="color-dot ${background}">
                </span>
                </td>`;
        if (randomNum >= 5) {
          boxes[10].textContent = "B";
          boxes[10].classList.remove("aquamarine");
          boxes[10].classList.add("burlywood");
        } else {
          boxes[10].textContent = "S";
          boxes[10].classList.remove("burlywood");
          boxes[10].classList.add("aquamarine");
        }

        resultEl.textContent = ``;
        resultEl.classList.add("resultHide");
        resultEl.classList.remove("resultShow");
      } else {
        boxes.forEach((box) => {
          box.classList.remove("red");
          box.classList.remove("green");
          box.classList.remove("aqua");
        });
        switch (randomNum) {
          case 0:
            background = "aqua";
            style = `
  background: -webkit-linear-gradient(top, #e1551eff 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("aqua");

            break;
          case 1:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 2:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 3:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 4:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 5:
            background = "aqua";
            style = `
  background: -webkit-linear-gradient(top, #40ad72 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("aqua");
            break;
          case 6:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 7:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;
          case 8:
            background = "red";
            style = "color:red";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("green");
            boxes[randomNum].classList.add("red");
            break;
          case 9:
            background = "green";
            style = "color:green";
            boxes[randomNum].classList.remove("aqua");
            boxes[randomNum].classList.remove("red");
            boxes[randomNum].classList.add("green");
            break;

          default:
            break;
        }

        if (randomNum >= 5) {
          result = "Big";
        } else {
          result = "Small";
        }

        tbody.innerHTML = `<td>202507151149</td>
                <td style="${style}">${randomNum}</td>
                <td>${result}</td>
                <td>
                <span class="color-dot ${background}">
                </span>
                </td>`;
        if (randomNum >= 5) {
          boxes[10].textContent = "B";
          boxes[10].classList.remove("aquamarine");
          boxes[10].classList.add("burlywood");
        } else {
          boxes[10].textContent = "S";
          boxes[10].classList.remove("burlywood");
          boxes[10].classList.add("aquamarine");
        }

        const match = userGuess === actualResult;

        resultEl.textContent = ` 
        ${match ? " WIN!😍 " : "LOSE! 😔"} `;
        setTimeout(() => {
          resultEl.classList.remove("resultShow");
          resultEl.textContent = "";
        }, 3000);

        resultEl.classList.remove("resultHide");
        resultEl.className = match ? "result correct" : " result wrong";
        resultEl.classList.add("resultShow");
      }

      // Reset
      userGuess = null;
      count = 30;
    }
  }, 1000);
}

startCountdown();

//!-----------------------------
// MainChart--------------------------------------------
const MainChart = document.querySelector(".MainChart");
const tableContent = document.querySelector(".tableContent");
const tableChart = document.querySelector(".tableChart");

MainChart.addEventListener("click", () => {
  tableContent.style.display = "none";
  tableChart.style.display = "block";
});
function GamHist() {
  tableContent.style.display = "block";
  tableChart.style.display = "none";
}
//!----------------------
