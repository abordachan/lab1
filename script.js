const pointButton = document.getElementById("btn-point");
const pointCountDisplay = document.getElementById("point-count");

// Initialize count variables
let pointCount = 0;

const points = ["Love", 15, 30, 40, "Game"];

// Use event listeners to track button clicks
// Increment respective count variables and update corresponding display elements on webpage
pointButton.addEventListener("click", () => {
  pointCount = (pointCount + 1) % points.length;
  pointCountDisplay.innerHTML = points[pointCount];
  if (pointCountDisplay.innerHTML === "Love") {
    alert("Game, Set, Match!");
  }
});