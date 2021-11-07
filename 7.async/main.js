function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock("10:40", () => console.log("Wake up!"), 1);
  alarm.addClock("10:42", () => console.log("Wake up now!"), 2);
  alarm.addClock("10:42", () => console.log("Wake up right now!"));
  alarm.addClock(
    "10:43",
    () => {
      console.log("Alarm! Alarm! Alarm!"), alarm.clearAlarms, alarm.printAlarm;
    },
    3
  );
  alarm.addClock("10:40", () => console.log("Wake up!"), 1);
  alarm.printAlarm();
  alarm.start();
  alarm.removeClock(2);
  alarm.removeClock(3);
  alarm.printAlarm();
}

testCase();
