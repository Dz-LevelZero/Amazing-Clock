// Analog Part
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let min = day.getMinutes() * 6;
  let sec = day.getSeconds() * 6;

  hours.style.transform = `rotate(${hr+(min/12)}deg)`;
  minutes.style.transform = `rotate(${min+(sec/60)}deg)`;
  seconds.style.transform = `rotate(${sec}deg)`;
})

// Digital Part
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(() => {
  let day = new Date();
  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();

  // Convert 24 hours to 12 hours
  if (h > 12) {
    h = h - 12;
    ampm.innerHTML = 'PM';
  } else {
    ampm.innerHTML = 'AM';
  }

  // Add zero to the left
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hr.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
})