// let currentIndex = 0;
// function moveSlide(direction) {
//   const slides = document.querySelector(".slides");
//   const totalSlides = document.querySelectorAll(".slide").length;
//   currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 4
//  seconds
setInterval(() => {
  moveSlide(1);
}, 4000);
// Modal---------------------------------------
const modalNotificaion = document.querySelector(".NotificationModal");
const modalNotificaion2 = document.querySelector(".NotificationModal2");

function modalPopup() {
  modalNotificaion.classList.add("modal");
}
let Pop1Id = setTimeout(() => {
  modalPopup();
}, 500);

const ConfirmPop = () => {
  modalNotificaion.classList.remove("modal");
  setTimeout(() => {
    modalNotificaion2.classList.add("modal2");
  }, 500);
  setTimeout(() => {
    document.querySelector(".cross").style.transform =
      "translate(-50%, -50%) scale(1) rotate(360deg)";
  }, 1000);
  // clearTimeout(Pop1Id);
};

const closePop = () => {
  modalNotificaion.remove();
  setTimeout(() => {
    modalNotificaion2.remove();
  }, 1000);
  modalNotificaion2.classList.remove("modal2");
};

let bodyy = document.querySelector("body");
let h1 = document.createElement("h1");
function checkWidth() {
  if (window.innerWidth < 510) {
    bodyy.classList.remove("containerRemove");
    // bodyy.classList.add("containerAdd");
    h1.remove();
  } else {
    // bodyy.classList.remove("containerAdd");
    bodyy.classList.add("containerRemove");
    h1.innerHTML = `<h1 style="text-align:center;color:red">Do Resize Small Screen </h1> `;
    bodyy.before(h1);
  }
}

// Check on load
checkWidth();

// Check on resize
window.addEventListener("resize", checkWidth);
