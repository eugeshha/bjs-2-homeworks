class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    /**
     * @param {string} time 
     * @param {Function} callback 
     * @throws {Error} 
     */
    addClock(time, callback) {
      if (!time || !callback) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
  
      if (this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn("Уже присутствует звонок на это же время");
      }
  
      this.alarmCollection.push({
        time,
        callback,
        canCall: true,
      });
    }
  
    /**
     * @param {string} time - время звонка, который нужно удалить.
     */
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
  
    /**
     * @returns {string}
     */
    getCurrentFormattedTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }
  
    start() {
      if (this.intervalId !== null) {
        return;
      }
  
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => {
        alarm.canCall = true;
      });
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
  