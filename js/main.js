const navigation = document.querySelector(".header .nav-menu");
const navToggleBtn = document.querySelector(".header .nav-toggle");

navToggleBtn.onclick = function () {
  navigation.classList.toggle("show");
};
