let count = 0;

// Select the elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Increase the counter
incrementButton.addEventListener("click", function () {
count ++;
    countDisplay.textContent = count;
});

// Decrease the counter
decrementButton.addEventListener("click", function () {
    count = count - 1;
    countDisplay.textContent = count;
});

// Reset the counter
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});