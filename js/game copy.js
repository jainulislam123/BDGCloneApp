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
const win30Count = document.querySelector(".sec");
const clearSetIn = document.querySelector("#clearSetIn");
const timmerCountDown = document.querySelector(".timmerCountDown");
const singleTbody = document.querySelector("tbody");
const tbody = document.querySelector("tbody tr:nth-child(2)");
const proces = document.querySelector("tbody tr:nth-child(1)");
let OkWinresult = document.querySelector(".OkWinresult");
// const tableChartElement = document.querySelector(".chartDivs .chartDisplay");

const boxes = document.querySelectorAll(".chartDisplay .boxNumber");

let count = 30;
let intravalId;
function StartIntraval() {
  win30Count.innerText = count;
  if (count < 10) {
    win30Count.innerText = `0${count}`;
  }
  --count;
}

let count2 = 30;
function fiveCountDown() {
  timmerCountDown.innerText = count;
  if (count2 < 10) {
    timmerCountDown.innerText = `0${count2}`;
  }
  if (count2 == 5) {
    timmerCountDown.classList.add("timerPop");
    audio.play();
  }
  if (count2 == 0) {
    timmerCountDown.classList.remove("timerPop");
    proces.remove();
  }
  --count2;
}

intravalId = setInterval(() => {
  StartIntraval();
  fiveCountDown();
}, 1000);

function fn() {
  setTimeout(() => {
    clearInterval(intravalId);
    Big();
    document.querySelector(".chartsNumber").innerHTML = "202507171818";
  }, 31000);
}

function fn2() {
  setTimeout(() => {
    clearInterval(intravalId);
    Big2();
    document.querySelector(".chartsNumber").innerHTML = "202507171818";
  }, 31000);
}

let setoUt = setTimeout(() => {
  random();
  clearInterval(intravalId);
  document.querySelector(".chartsNumber").innerHTML = "202507171818";
}, 31000);

let Setou2 = setTimeout(() => {
  location.reload();
}, 50000);

function Big() {
  let a = random();
  OkWinresult.classList.add("okWinLoseShow");
  if (a >= 5) {
    OkWinresult.innerHTML = "WIN";
  } else {
    OkWinresult.innerHTML = "LOSE";
    OkWinresult.style.color = "red";
  }
}
function Big2() {
  OkWinresult.classList.add("okWinLoseShow");
  let a = random();
  if (a < 5) {
    OkWinresult.innerHTML = "WIN";
  } else {
    OkWinresult.innerHTML = "LOSE";
    OkWinresult.style.color = "red";
  }
}

clearSetIn.addEventListener("click", () => {
  win30Count.innerText = "00";
  clearInterval(intravalId);
  clearTimeout(setoUt);
  clearTimeout(Setou2);
});

Sec30WingImg.addEventListener("click", () => {
  location.reload();
});
//~-----------------------randomMethod---------------------

function random() {
  let randomNumber = Math.random() * 9;
  let randomNum = Math.round(randomNumber);
  let result;
  let result2;
  let background;
  boxes.forEach((box) => {
    box.classList.remove("red");
  });
  switch (randomNum) {
    case 0:
      background = "aqua";
      style = `
  background: -webkit-linear-gradient(top, #40ad72 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
      boxes[randomNum].classList.remove("red");
      boxes[randomNum].classList.add("burlywood");
      break;
    case 1:
      background = "green";
      style = "color:green";
      boxes[randomNum].classList.remove("red");
      boxes[randomNum].classList.add("green");
      break;
    case 2:
      background = "red";
      style = "color:red";
      boxes[randomNum].classList.remove("green");
      boxes[randomNum].classList.add("red");
      break;
    case 3:
      background = "green";
      style = "color:green";
      boxes[randomNum].classList.remove("red");
      boxes[randomNum].classList.add("green");
      break;
    case 4:
      background = "red";
      style = "color:red";
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
      break;
    case 6:
      background = "red";
      style = "color:red";
      boxes[randomNum].classList.remove("green");
      boxes[randomNum].classList.add("red");
      break;
    case 7:
      background = "green";
      style = "color:green";
      boxes[randomNum].classList.remove("red");
      boxes[randomNum].classList.add("green");
      break;
    case 8:
      background = "red";
      style = "color:red";
      boxes[randomNum].classList.remove("green");
      boxes[randomNum].classList.add("red");
      break;
    case 9:
      background = "green";
      style = "color:green";
      boxes[randomNum].classList.remove("red");
      boxes[randomNum].classList.add("green");
      break;

    default:
      break;
  }

  if (randomNum >= 5) {
    result = "Big";
    result2 = "B";
  } else {
    result = "Small";
    result2 = "S";
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
  return randomNum;
}

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

let bigBtn = document.querySelector("#big");
let small = document.querySelector("#small");
bigBtn.addEventListener("click", fn);
small.addEventListener("click", fn2);
