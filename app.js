//Mobile Menu Toggle

const menuButton = document.getElementById("menuButton");

const menu = document.getElementById("menu");

menuButton.addEventListener('click', function() {
  menu.classList.toggle('menuMobile');
  menuButton.classList.toggle('closeButton');

  return;
})

//RSVP Button

const attendingButton = document.getElementById("attending");
const regretsButton = document.getElementById("regrets");

attendingButton.addEventListener('click', function(event) {
  event.preventDefault();
})

regretsButton.addEventListener('click', function(event) {
  event.preventDefault();
})

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