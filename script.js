let countdownValue = 46;
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  if (countdownValue > 0) {
    countdownValue--;
    countdownElement.textContent = countdownValue;
  }
}

setInterval(updateCountdown, 1000);
