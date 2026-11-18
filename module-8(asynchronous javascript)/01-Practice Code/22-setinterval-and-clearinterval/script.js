const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const output = document.querySelector("#timer-output");
let intervalId = null;
let seconds = 0;

startButton.addEventListener("click", () => {
  if (intervalId !== null) return; // Prevent multiple intervals.
  seconds = 0;
  output.textContent = "Timer: 0 seconds";
  intervalId = setInterval(() => {
    seconds += 1;
    output.textContent = `Timer: ${seconds} second(s)`;
    if (seconds >= 10) stopTimer();
  }, 1000);
});

function stopTimer() {
  if (intervalId === null) return;
  clearInterval(intervalId);
  intervalId = null;
  output.textContent += " — stopped";
}
stopButton.addEventListener("click", stopTimer);
showSection("Timer controls");
showNote("setInterval repeats until clearInterval stops it. Keep the interval ID and clear it when the work is finished or the UI is removed.");
