var ractive = new Ractive({
    el: '#countdown-app',
    template: `
      <div class="timer {{ timerClass }}">{{ formattedTime }}</div>
      <div>
        <input type="number" min="0" max="99" placeholder="HH" value="{{ hours }}">:
        <input type="number" min="0" max="59" placeholder="MM" value="{{ minutes }}">:
        <input type="number" min="0" max="59" placeholder="SS" value="{{ seconds }}">
      </div>
      <div class="controls">
        <button on-click="start">Start</button>
        <button on-click="pause" disabled>Pause</button>
        <button on-click="reset">Reset</button>
      </div>
    `,
    data: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      initialHours: 0,
      initialMinutes: 0,
      initialSeconds: 0,
      intervalId: null,
      timerClass: '',
    },
    computed: {
      formattedTime: function() {
        return this.pad(this.hours) + ':' + this.pad(this.minutes) + ':' + this.pad(this.seconds);
      }
    },
    methods: {
      pad: function(num) {
        return String(num).padStart(2, '0');
      },
      start: function() {
        if (!this.intervalId) {
          this.initialHours = this.hours;
          this.initialMinutes = this.minutes;
          this.initialSeconds = this.seconds;
          this.intervalId = setInterval(this.tick.bind(this), 1000);
          this.timerClass = 'running';
          this.get('pause').disabled = false;
        }
      },
      pause: function() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
          this.timerClass = 'paused';
        }
      },
      reset: function() {
        this.pause();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timerClass = '';
        this.get('pause').disabled = true;
      },
      tick: function() {
        if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
          this.pause();
          alert('Time up!');
          return;
        }
  
        if (this.seconds === 0) {
          this.seconds = 59;
          if (this.minutes === 0) {
            this.minutes = 59;
            this.hours--;
          } else {
            this.minutes--;
          }
        } else {
          this.seconds--;
        }
      }
    }
  });
  