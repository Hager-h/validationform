let form = document.querySelector(".form");
let fullName = document.getElementById("full");
let userName = document.getElementById("User");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let confirmPass = document.getElementById("re-pass");
let radioBtns = document.querySelectorAll(".radio");
let reset = document.querySelector(".reset");
let allSpans = document.querySelectorAll(".block span");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");


//for locale sorage
 let arr;
if (window.localStorage.data != null) {
  arr = JSON.parse(window.localStorage.data);
} else {
  arr = [];
}
//

// //for radio check but i dont use it
// if (window.localStorage.gender === "Male") {
//   radioBtns[0].checked = true;
// } else if (window.localStorage.gender === "Female") {
//   radioBtns[1].checked = true;
// } else {
//   radioBtns[0].checked && radioBtns[1].checked && false;
// }

//for submit

form.addEventListener("submit", function (e) {
  validInputs();

  allSpans.forEach((span) => {
    if (span.style.visibility === "visible") {
      e.preventDefault();
    }
  });
});

let validInputs = function () {
  let namee = fullName.value.trim();
  let user = userName.value.trim();
  let email = mail.value.trim();
  let password = pass.value.trim();
  let rePass = confirmPass.value.trim();

  checkFullName(namee);
  checkUserName(user);
  checkMail(email);
  checkPass(password);
  checkRePass(rePass);

   let radioMessage = document.querySelector(".rad");

   if (radioBtns[0].checked !== true && radioBtns[1].checked !== true) {
     radioMessage.innerText = "plz select the gender";
     radioMessage.style.visibility = "visible";
   } else {
     radioMessage.style.visibility = "hidden";
   }
   let Gen =
     radioBtns[0].checked === true ? (gender = "Male") : (gender = "Female");
  //  window.localStorage.setItem("gender", Gen); to store gender in locale
 
  if (
    one.classList.contains("sucess") &&
    two.classList.contains("sucess") &&
    three.classList.contains("sucess") &&
    four.classList.contains("sucess") &&
    five.classList.contains("sucess")
  ) {


  let obj = {
    userNamee: userName.value.trim(),
    password: pass.value.trim(),
    email: mail.value.trim(),
  };




    arr.push(obj);
    window.localStorage.setItem("data", JSON.stringify(arr));
  }
};

//for full name check☻☻
function checkFullName(namee) {
  if (namee !== "" && namee.includes(" ") && namee.length >= "6") {
    suceessFun(fullName);
  } else if (namee === "") {
    failFun(fullName, "This field must not be empty ");
  } else {
    failFun(fullName, "This is not full name");
  }
}

//for user name check◘
function checkUserName(user) {
  if (user !== "" && user.length >= "6") {
    suceessFun(userName);
  } else if (user === "") {
    failFun(userName, "This field must not be empty ");

  }
   else {
    failFun(userName, "user name  must be greter than 6 char");
  }



}

// for check mail
function checkMail(email) {
  let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (email !== "" && email.match(emailRegex)) {
    suceessFun(mail);
  } else if (email === "") {
    failFun(mail, "This field must not be empty ");
  } else {
    failFun(mail, "Enter Valid Email");
  }
}

//for check password

function checkPass(password) {
  if (password !== "" && password.length >= "9") {
    suceessFun(pass);
  } else if (password === "") {
    failFun(pass, "This field must not be empty ");
  } else {
    failFun(pass, "Enter Valid Password");
  }
}

function checkRePass(rePass) {
  let password = pass.value.trim();

  if (rePass !== "" && rePass === password && password.length >= "9") {
    suceessFun(confirmPass);
  } else if (rePass === "") {
    failFun(confirmPass, "This field must not be empty ");
  } else {
    failFun(confirmPass, "Passwords Dont Match");
  }
}

function failFun(input, message) {
  let containerDiv = input.parentElement;
  let span = containerDiv.querySelector("span");
  if (containerDiv.classList.contains("sucess"))
    containerDiv.classList.remove("sucess");
  containerDiv.classList.add("fail");
  span.style.visibility = "visible";
  span.innerText = message;
}
function suceessFun(input) {
  let containerDiv = input.parentElement;
  if (containerDiv.classList.contains("fail"))
    containerDiv.classList.remove("fail");
  containerDiv.classList.add("sucess");
  let span = containerDiv.querySelector("span");

  span.style.visibility = "hidden";
}
// /for reset btn
reset.addEventListener("click", function () {
  window.location.reload();
  window.localStorage.clear();
});

