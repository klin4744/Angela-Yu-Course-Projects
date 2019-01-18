let dice1Roll, dice2Roll;
document.querySelector("button").addEventListener("click", () => {
  dice1Roll = Math.floor(Math.random() * 6) + 1;
  dice2Roll = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").src = `./images/dice${dice1Roll}.png`;
  document.querySelector(".img2").src = `./images/dice${dice2Roll}.png`;
  const text = document.querySelector("h1");

  if (dice1Roll === dice2Roll) {
    text.innerText = "It's a draw!";
  } else {
    dice1Roll > dice2Roll
      ? (text.innerText = "Player 1 Wins!")
      : (text.innerText = "Player 2 Wins!");
  }
});
