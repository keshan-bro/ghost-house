const button = document.getElementById("enterButton");
const ghost = document.getElementById("ghost");
const scream = document.getElementById("scream");

button.addEventListener("click", () => {
  ghost.style.display = "block";
  scream.play();
  button.style.display = "none";
  document.getElementById("intro").textContent = "A ghost appears in the shadows...";
});
