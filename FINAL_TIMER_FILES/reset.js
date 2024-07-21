var countdownTimer = $this.findComponent();
if (countdownTimer) {
clearInterval(countdownTimer.get('intervalId'));
    countdownTimer.set({
      remaining: $this.get('$settings.duration'),
      intervalId: null,
      timeup: false,
      isRunning: false
    });
    countdownTimer.updateTime();
}


//timeUp is defined as another action