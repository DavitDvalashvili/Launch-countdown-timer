const countDownDate = new Date().getTime()+(1000*3600*24*25);
const countOfDays = document.getElementById("days");
const countOfHours = document.getElementById("hours");
const countOfMinutes = document.getElementById("minutes");
const countOfSeconds = document.getElementById("seconds");



// Update the count down every 1 second
let setTimeInterval = setInterval( () => {
  // Get today's date and time
  const currentTime = new Date().getTime();
  const timePeriod = (countDownDate - currentTime)/1000;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(timePeriod / (60*60*24));
  let hours = Math.floor((timePeriod % (60*60*24)) / (60*60));
  let minutes = Math.floor((timePeriod % (60*60)) / 60);
  let seconds = Math.floor(timePeriod % 60);

  //set days, hours, minutes and seconds on the screen;
  countOfDays.textContent = days;
  countOfHours.textContent = hours;
  countOfMinutes.textContent = minutes;
  countOfSeconds.textContent = seconds;
}, 1000)
