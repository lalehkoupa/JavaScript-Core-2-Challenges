function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

document.addEventListener("keypress", keyBoardEvents);
document.getElementById("startGameBtn").addEventListener("click", () => {
  const time = document.getElementById("timeTxt").value;
  setTimeout(() => {});
});
