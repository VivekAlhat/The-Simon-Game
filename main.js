var level = 0;
var hasStarted = false;
var game = [];
var user = [];
var colors = ["red", "green", "blue", "yellow"];

function nextPattern() {
  user = [];
  level++;
  $("h3").text("level " + level);
  var random = Math.floor(Math.random() * 4);
  var chosenColor = colors[random];
  game.push(chosenColor);
  playSound(chosenColor);
  animateColor(chosenColor);
  //   console.log(random);
}

$(".block").on("click", function () {
  var btn = $(this).attr("id");
  user.push(btn);
  playSound(btn);
  animateColor(btn);
  checkResults(user.length - 1);
});

function playSound(color) {
  var gameSound = new Audio("audio/" + color + ".mp3");
  gameSound.play();
}

function animateColor(color) {
  $("." + color)
    .fadeOut(100)
    .fadeIn(100);
}

$(document).on("keydown", function () {
  if (!hasStarted) {
    $("h3").text("Level " + level);
    hasStarted = true;
    nextPattern();
  }
});

function checkResults(level) {
  if (user[level] === game[level]) {
    if (user.length === game.length) {
      setTimeout(function () {
        nextPattern();
      }, 1000);
    }
    // console.log("Success");
  } else {
    var wrong = new Audio("audio/wrong.mp3");
    wrong.play();
    $("h3").text("Game Over! Press any key to restart");
    $("body").addClass("wrong");
    setTimeout(function () {
      $("body").removeClass("wrong");
    }, 200);
    reset();
    // console.log("Failure");
  }
}

function reset() {
  level = 0;
  hasStarted = false;
  game = [];
  user = [];
}
