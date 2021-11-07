function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock("10:40", () => console.log("Wake up!"), 1);
  alarm.addClock("10:42", () => console.log("Wake up now!"), 2);
  alarm.addClock("10:42", () => console.log("Wake up right now!"));
}

testCase();
