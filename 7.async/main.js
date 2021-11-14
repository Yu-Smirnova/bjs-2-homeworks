function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock("10:40", () => console.log("Wake up!"), 1);
  alarm.addClock(
    "10:42",
    () => {
      console.log("Wake up now!"), alarm.removeClock(2);
    },
    2
  );
  try {
    alarm.addClock("10:42", () => console.log("Wake up right now!"));
  } catch (err) {
    console.log(`Caught an exception! ${err}`);
  }
  alarm.addClock(
    "10:43",
    () => {
      console.log("Alarm! Alarm! Alarm!"),
        alarm.clearAlarms(),
        alarm.printAlarm();
    },
    3
  );
  alarm.addClock("10:40", () => console.log("Wake up!"), 1);
  alarm.printAlarm();
  alarm.start();
  alarm.printAlarm();
}

testCase();
