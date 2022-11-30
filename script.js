let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginPage = document.querySelector(".register-page");
let accountPage = document.querySelector(".account-page");

const valid = {
  email: "test@gmail.com",
  password: "test123",
};

function login() {
  if (email.value == valid.email && password.value == valid.password) {
    accountPage.style.display = "block";
    loginPage.style.display = "none";
  } else {
    alert("Invalid Email or Password");
  }
}
function logout() {
  accountPage.style.display = "none";
  loginPage.style.display = "flex";
}
function showReciept() {}
//Declaration...
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
