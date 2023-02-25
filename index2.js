//to get data from locale
let arr;
if (window.localStorage.data != null) {
  arr = JSON.parse(window.localStorage.data);
} else {
  arr = [];
}



//for login

console.log(arr)



let login = document.querySelector(".sub")
login.addEventListener("click", function (e) {

// e.preventDefault()
let user2 = document.getElementById("User")
let pass2 = document.getElementById("pass")


  if (user2.value !== "" && pass2.value !== "") {
    if (arr.some((d) => d.userNamee === user2.value.trim() && d.password === pass2.value.trim())) {
      window.location.href = "home.html"
    }
   







    else {
      e.preventDefault()

      let error = document.querySelector(".sign")
      error.style.visibility = "visible"
      
      error.textContent = " you are not amember yet,click to sign up"
    

    }

  } else {e.preventDefault()

      let error = document.querySelector(".sign")
    error.style.visibility = "visible"
    error.textContent = " fill the fields , or click to sign up"
  }
 user2.value=""
  pass2.value = ""
  })


// for sign up btn found in login
function goto() {
  window.location.href="sign.html"
}
