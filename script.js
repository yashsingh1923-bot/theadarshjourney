function startCountdown(seconds) {
  const countdownEl = document.getElementById('countdown');
  function update() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    countdownEl.textContent = `Next prediction drops in: ${hrs}:${mins}:${secs}`;
    seconds--;
    if (seconds < 0) seconds = 7200;
  }
  update();
  setInterval(update, 1000);
}
startCountdown(7200);
