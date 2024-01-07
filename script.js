// DOM elements
// All buttons
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

// All text digits
const minuteText = document.querySelector(".minute");
const secondText = document.querySelector(".second");
const milliText = document.querySelector(".millisecond");

// Initialize variables
let second = 0;
let timerInterval;
let runningTimer = false;

// Event listener for the start button
startButton.addEventListener("click", () => {
  // Start the timer if it's not already running
  if (!runningTimer) {
    startTimer();
    runningTimer = true;
  }
});

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(increaseSecond, 100);
}

// Function to increase the elapsed seconds
function increaseSecond() {
  second++;
  // Update the displayed timer
  displayTimer(second);
}

// Function to display the formatted time
function displayTimer(totalSecond) {
  const seconds = Math.floor((totalSecond % 600) / 10);
  const minutes = Math.floor(totalSecond / 600);
  const milliseconds = Math.floor((totalSecond % 10) * 10);

  // Update the text content of the displayed time
  milliText.textContent = timeFormat(milliseconds);
  secondText.textContent = timeFormat(seconds);
  minuteText.textContent = timeFormat(minutes);
}

// Function to format time with leading zeros
function timeFormat(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value.toString();
  }
}

// Event listener for the stop button
stopButton.addEventListener("click", () => {
  // Stop the timer if it's currently running
  if (runningTimer) {
    stopTimer();
    runningTimer = false;
  }
});

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  // Update the displayed timer when stopped
  displayTimer(second);
}

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  // Reset variables and stop the timer
  second = 0;
  clearInterval(timerInterval);
  runningTimer = false;
  // Reset displayed timer to "00:00:00"
  milliText.textContent = "00";
  secondText.textContent = "00";
  minuteText.textContent = "00";
});
