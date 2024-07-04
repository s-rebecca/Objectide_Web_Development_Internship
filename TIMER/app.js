var ractive = new Ractive({
  target: '#target',
  template: '#template',
  data: {
    duration: 300, // default to 5 minutes
    remaining: 300,
    intervalId: null,
    formattedTime: '05:00',
    timeup: false,
    isRunning: false
  },
  updateTime: function () {
    var duration = parseInt(this.get('duration'), 10) || 0;
    this.set({
      remaining: duration,
      formattedTime: this.formatTime(duration),
      timeup: false
    });
  },
  formatTime: function (seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  },
  start: function () {
    if (this.get('intervalId')) return; // prevent multiple intervals
    this.set('isRunning', true);
    var intervalId = setInterval(() => {
      var remaining = this.get('remaining') - 1;
      if (remaining <= 0) {
        clearInterval(this.get('intervalId'));
        this.set({
          intervalId: null,
          remaining: 0,
          timeup: true,
          isRunning: false,
          formattedTime: '00:00'
        });
        alert("Time's up!"); // Audio/visual alert
        return;
      }
      this.set('remaining', remaining);
      this.set('formattedTime', this.formatTime(remaining));
    }, 1000);
    this.set('intervalId', intervalId);
  },
  pause: function () {
    clearInterval(this.get('intervalId'));
    this.set({
      intervalId: null,
      isRunning: false
    });
  },
  reset: function () {
    clearInterval(this.get('intervalId'));
    this.set({
      remaining: this.get('duration'),
      intervalId: null,
      timeup: false,
      isRunning: false
    });
    this.updateTime();
  },
  oninit: function () {
    this.updateTime();
  }
});

// Observe changes to the `isRunning` state and update the time display class accordingly
ractive.observe('isRunning', function (isRunning) {
  var timeDisplay = document.querySelector('.time-display');
  timeDisplay.className = 'time-display ' + (isRunning ? 'time-running' : 'time-paused');
});
