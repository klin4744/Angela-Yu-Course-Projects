const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}
// Button clicks
document.querySelector("body").addEventListener("keydown", handleButtonPress);
// wasdjkl
// 87 65 83 68 74 75 76
function handleButtonPress(e) {
  let key = e.keyCode;
  let audio;
  switch (key) {
    case 87:
      audio = new Audio("./sounds/crash.mp3");
      break;
    case 65:
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    case 83:
      audio = new Audio("./sounds/snare.mp3");
      break;
    case 68:
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case 74:
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case 75:
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case 76:
      audio = new Audio("./sounds/tom-4.mp3");
      break;
  }
  audio.play();
}
function handleClick(e) {
  let text = e.target.innerText;
  let audio;
  switch (text) {
    case "w":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
  }
  audio.play();
}
