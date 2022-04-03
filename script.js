let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let min = day.getMinutes() * 6;
  let sec = day.getSeconds() * 6;

  hours.style.transform = `rotate(${hr+(min/12)}deg)`;
  minutes.style.transform = `rotate(${min+(sec/60)}deg)`;
  seconds.style.transform = `rotate(${sec}deg)`;
})