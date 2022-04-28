//Mobile Menu Toggle

const menuButton = document.getElementById("menuButton");

const menu = document.getElementById("menu");

menuButton.onclick = function() {
  menu.classList.toggle('menuMobile');
  

  if (menuButton.textContent === "≡") {
    menuButton.textContent = "×";
  }

  else {
    menuButton.textContent = "≡";
  }

  return;
}

//Countdown Timer

var countDownDate = new Date("May 15, 2022 19:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "May 15, 2022 7 PM";
  }
}, 1000);