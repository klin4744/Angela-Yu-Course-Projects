// Random number generator
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
function nextSequence() {
  level += 1;
  $("h1").text(`Level ${level}`);
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  console.log(gamePattern);
}
function playSound(color) {
  let sound = new Audio(`./sounds/${color}.mp3`);
  sound.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(() => $("#" + currentColor).removeClass("pressed"), 100);
}
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence(), 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    level = 0;
    started = false;
  }
}
$(".btn").click(e => {
  let userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern);
});
$("body").keypress(() => {
  if (!started) {
    $("h1").text("Level 0");
    nextSequence();
    started = true;
  }
  console.log(started);
});
