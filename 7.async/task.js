class AlarmClock {
    constructor() {
      this.alarmCollection = [],
      this.timerId = null
    }
  
    addClock(time, callback, id) {
      if(id === undefined) {
        throw new Error ('ID is not defined');
      } else if(this.alarmCollection.some(alarm => alarm.id === id)) {
        console.error(`Alarm with id ${id} already exists`);
        break;
      } else {
        this.alarmCollection.push({time, callback, id});
      }
    }
  
    removeClock(id) {
      let alarmToDelete = this.alarmCollection.filter(alarm => alarm.id === id);
      if (alarmToDelete.lehgth === 0) {
        return false;
      } else {
        this.alarmCollection.splice(this.alarmCollection.findIndexOf(alarmToDelete), 1);
        return true;
      }
    }
  
    getCurrentFormattedTime() {
      let date = new Date() ;
      return `${date.getHours()}:${date.getMinutes()}`;
    }
  
    checkClock(alarm) {
      if(alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    }
  
    start() {
      if(this.timerId === null) {
        this.timerId = setInterval(this.alarmCollection.every(alarm => alarm.callback()));
      }
    }
  
    stop() {
      if(this.timerId !== null) {
        clearIntrval(this.timerId);
        this.timerId = null;
      }
    }
  
    printAlarm() {
      this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} заведен на ${alarm.time} часов.`))
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
  