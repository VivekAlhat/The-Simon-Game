var level = 0;
var hasStarted = false;
var game = [];
var user = [];
var colors = ["red", "green", "blue", "yellow"];

function nextPattern() {
  level++;
  var random = Math.floor(Math.random() * 4);
  var chosenColor = colors[random];
  game.push(chosenColor);
  playSound(chosenColor);
  animateColor(chosenColor);
  //   console.log(random);
}

function playSound(color) {
  var gameSound = new Audio("audio/" + color + ".mp3");
  gameSound.play();
}

function animateColor(color) {
  $("." + color)
    .fadeOut(100)
    .fadeIn(100);

  $("." + color).addClass("highlight");
  setTimeout(function () {
    $("." + color).removeClass("highlight");
  }, 300);
}

$(document).on("keydown", function () {
  if (!hasStarted) {
    $("h3").text("Level " + level);
    level = 0;
    hasStarted = true;
    nextPattern();
  }
});

function checkResults(level) {
  if (user[level] === game[level]) {
    console.log("Success");
  } else {
    reset();
    console.log("Failure");
  }
}

function reset() {
  level = 0;
  hasStarted = false;
  game = [];
  user = [];
}
