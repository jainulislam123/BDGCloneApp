// const formDiv1 = document.querySelector(".registerForm form");

// const emailIcon = document.querySelector(".emailIcon");
// const PhoneIcon = document.querySelector(".PhoneIcon");

// const phoneNumber = formDiv1.querySelector(".phoneNumber");
// const Email = formDiv1.querySelector(".email");

// const showRegisEmailPage = () => {
//   emailIcon.classList.add("activeColor");
//   PhoneIcon.classList.remove("activeColor");
//   phoneNumber.style.display = "none";
//   Email.style.display = "block";
// };
// const showRegisPhonePage = () => {
//   emailIcon.classList.remove("activeColor");
//   PhoneIcon.classList.add("activeColor");
//   phoneNumber.style.display = "block";
//   Email.style.display = "none";
// };

// emailIcon.addEventListener("click", showRegisEmailPage);
// PhoneIcon.addEventListener("click", showRegisPhonePage);
// // ! Login works---------------------------
// const loginBtn = formDiv1.querySelector("#loginBtn");
// const registerForm = document.querySelector(".registerForm .hideShow");
// const loginForm = document.querySelector(".loginForm");

// const phoneNumber2 = loginForm.querySelector(".phoneNumber2");
// const email2 = loginForm.querySelector(".email2");

// const registerBtn2 = loginForm.querySelector("#registerBtn2");
// const registerMsg = document.querySelector(".registerMsg");

// const ShowPhoneLoginPage = () => {
//   registerForm.style.display = "none";
//   loginForm.style.display = "block";
//   registerMsg.innerHTML = `<h2>Login</h2> <p>Please log in with your phone number. If you forget your password, please contact customer service</p>`;
//   phoneNumber2.style.display = "block";
//   email2.style.display = "none";
//   emailIcon.addEventListener("click", () => {
//     email2.style.display = "block";
//     phoneNumber2.style.display = "none";
//     PhoneIcon.addEventListener("click", () => {
//       email2.style.display = "none";
//       phoneNumber2.style.display = "block";
//     });
//   });
// };
// const showRegisPage = () => {
//   registerForm.style.display = "block";
//   loginForm.style.display = "none";
//   registerMsg.innerHTML = `<h2>Register</h2><p>Please register by phone number</p>`;
//   phoneNumber2.style.display = "block";
// };

// loginBtn.addEventListener("click", ShowPhoneLoginPage);
// registerBtn2.addEventListener("click", showRegisPage);
//! register Phone And Email ---------------
const registerForm = document.querySelector(".registerForm .hideShow");
const formDiv1 = document.querySelector(".registerForm form");

const phoneNumber = formDiv1.querySelector(".phoneNumber");
const Email = formDiv1.querySelector(".email");

const emailIcon = document.querySelector(".emailIcon");
const PhoneIcon = document.querySelector(".PhoneIcon");

const emailInput = Email.querySelector("input");
const phoneInput = phoneNumber.querySelector("input");

const showRegisEmailPage = () => {
  emailIcon.classList.add("activeColor");
  PhoneIcon.classList.remove("activeColor");
  phoneNumber.style.display = "none";
  Email.style.display = "block";

  phoneInput.removeAttribute("required");
  emailInput.setAttribute("required", "required");
};

const showRegisPhonePage = () => {
  emailIcon.classList.remove("activeColor");
  PhoneIcon.classList.add("activeColor");
  phoneNumber.style.display = "block";
  Email.style.display = "none";

  emailInput.removeAttribute("required");
  phoneInput.setAttribute("required", "required");
};
emailIcon.addEventListener("click", showRegisEmailPage);
PhoneIcon.addEventListener("click", showRegisPhonePage);

//!Login Page phone And Email-----------------------------------------
const loginForm = document.querySelector(".loginForm");
const loginBtn = formDiv1.querySelector("#loginBtn");

const phoneNumber2 = loginForm.querySelector(".phoneNumber2");

const email2 = loginForm.querySelector(".email2");

const PhoneLogin = phoneNumber2.querySelector("input");
const EmailLogin = email2.querySelector("input");

const registerBtn2 = loginForm.querySelector("#registerBtn2");
const registerMsg = document.querySelector(".registerMsg");

const ShowPhoneLoginPage = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  registerMsg.innerHTML = `<h2>Login</h2> <p>Please log in with your phone number. If you forget your password, please contact customer service</p>`;
  phoneNumber2.style.display = "block";
  email2.style.display = "none";
  PhoneLogin.setAttribute("required", "required");
  EmailLogin.removeAttribute("required");
  //^addEvent---
  emailIcon.addEventListener("click", () => {
    email2.style.display = "block";
    phoneNumber2.style.display = "none";
    PhoneLogin.removeAttribute("required");
    EmailLogin.setAttribute("required", "required");
    //^addEvent----
    PhoneIcon.addEventListener("click", () => {
      email2.style.display = "none";
      phoneNumber2.style.display = "block";
      PhoneLogin.setAttribute("required", "required");
      EmailLogin.removeAttribute("required");
    });
  });
};
const showRegisPage = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  registerMsg.innerHTML = `<h2>Register</h2><p>Please register by phone number</p>`;
  phoneNumber2.style.display = "block";
};

loginBtn.addEventListener("click", ShowPhoneLoginPage);
registerBtn2.addEventListener("click", showRegisPage);

const formSubmit = document.querySelector("#formSubmit");
const SetPassword = formDiv1.querySelector("#SetPassword");
const ConfirmPassword = formDiv1.querySelector("#ConfirmPassword");

let numberInput;
let SetpassValue;
let ConPassValue;
function mobileValid() {
  SetpassValue = SetPassword.value;
  ConPassValue = ConfirmPassword.value;
  let result = SetpassValue === ConPassValue ? "✔️" : "❌";
  document.getElementById("PassWordMatch").innerHTML = result;
  SetPassword.addEventListener("input", mobileValid);
}

ConfirmPassword.addEventListener("input", mobileValid);

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  numberInput = phoneInput.value;
  if (SetpassValue === ConPassValue) {
    localStorage.setItem("UserNumber", numberInput);
    localStorage.setItem("Password", ConPassValue);
  } else {
    document.getElementById("PassWordMatch").innerHTML = "Not Match";
    ConfirmPassword.style.border = " 1px dashed red";
  }
  // console.log(numberInput);
  e.preventDefault();
  let inputs = formSubmit.querySelectorAll("input");
  inputs.forEach((element) => {
    document.querySelector(".loadingImg").style.display = "block";
    document.querySelector(".loadingImg h2").innerHTML =
      "Registration Successfull";
    setTimeout(() => {
      element.value = "";
      document.getElementById("PassWordMatch").innerHTML = "";
      document.querySelector(".loadingImg").style.display = "none";
    }, 4000);
  });
});

//! login page works----------------------------------
const loginweb = document.querySelector("#loginweb");
const passId2 = loginweb.querySelector("#passId2");

loginweb.addEventListener("submit", (e) => {
  e.preventDefault();
  const UserName = localStorage.getItem("UserNumber");
  const Password = localStorage.getItem("Password");
  console.log(UserName, Password);
  if (PhoneLogin.value == UserName && Password == passId2.value) {
    document.querySelector(".loadingImg h2").innerHTML = "Loging...";
    document.querySelector(".loadingImg").style.display = "block";
    loginweb.querySelector("#NotMatchPassuser").innerHTML = "";
    setTimeout(() => {
      window.location = "HomePage.html";
      document.querySelector(".loadingImg").style.display = "none";
    }, 3000);
  } else {
    loginweb.querySelector("#NotMatchPassuser").innerHTML =
      "× Invalid Mobile Number & Password";
  }
});

let bodyy = document.querySelector("body");
let h1 = document.createElement("h1");
function checkWidth() {
  if (window.innerWidth < 510) {
    bodyy.classList.remove("containerRemove");
    h1.remove();
  } else {
    bodyy.classList.add("containerRemove");
    h1.innerHTML = `<h1 style="text-align:center;color:red">Do Resize Small Screen </h1> `;
    bodyy.before(h1);
  }
}

// Check on load
checkWidth();

// Check on resize
window.addEventListener("resize", checkWidth);
