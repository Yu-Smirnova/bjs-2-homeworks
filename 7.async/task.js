class AlarmClock {
  constructor() {
    (this.alarmCollection = []), (this.timerId = null);
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("ID is not defined");
    } else if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error(`Alarm with id ${id} already exists`);
    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  }

  removeClock(id) {
    let index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
    if (index === -1) {
      return false;
    } else {
      this.alarmCollection.splice(index, 1);
      return true;
    }
  }

  getCurrentFormattedTime() {
    let date = new Date();
    let hour = `${date.getHours()}`;
    if (hour.length === 1) {
      let hour = `0${hour}`;
    }
    let minute = `${date.getMinutes()}`;
    if (minute.length === 1) {
      let minute = `0${minute}`;
    }
    return `${hour}:${minute}`;
  }

  checkClock(alarm) {
    if (alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.every((alarm) => alarm.callback());
      }, 5000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarm() {
    this.alarmCollection.forEach((alarm) =>
      console.log(`Будильник №${alarm.id} заведен на ${alarm.time} часов.`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
