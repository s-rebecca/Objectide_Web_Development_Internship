var countdownTimer = $this.findComponent();
if (countdownTimer) {
clearInterval(countdownTimer.get('intervalId'));
    countdownTimer.set({
      isRunning: false
    });
}