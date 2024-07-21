var countdownTimer = $this.findComponent();
if (countdownTimer) {

    countdownTimer.set('isRunning', true);
    var intervalId = setInterval(() => {
        var remaining = (countdownTimer.get('remaining') || countdownTimer.get('$settings.duration')) - 1;

        if (remaining <= 0) {
            clearInterval(countdownTimer.get('intervalId'));
            countdownTimer.set({
                intervalId: null,
                remaining: 0,
                timeup: true,
                isRunning: false,
                formattedTime: '00:00'
            });

            alert("Time's up!"); // Audio/visual alert
            $this.$timeUp();
            return null;
        }
        countdownTimer.set('remaining', remaining);
        countdownTimer.set('formattedTime', $this.formatTime(remaining));
        
        return countdownTimer.get('intervalId');
    }, 1000);
    countdownTimer.set('intervalId', intervalId);
}


$this.formatTime = function (seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}