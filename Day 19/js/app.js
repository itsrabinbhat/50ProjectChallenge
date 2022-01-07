// Script Goes Here...
const toggleBtn = document.querySelector(".toggle");
const html = document.querySelector("html");

const hourNeedle = document.querySelector(".needle.hour");
const minNeedle = document.querySelector(".needle.minute");
const secNeedle = document.querySelector(".needle.second");

const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleBtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleBtn.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    toggleBtn.innerHTML = "Light Mode";
  }
});

function setTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const hourForClock = hour % 12;
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const month = currentTime.getMonth();
  const day = currentTime.getDay();
  const date = currentTime.getDate();

  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    1,
    12,
    0,
    360
  )}deg)`;

  minNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    1,
    60,
    0,
    360
  )}deg)`;

  secNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    1,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hourForClock}:${minute < 10 ? "0" + minute : minute}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${
    date < 10 ? "0" + date : date
  }</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

setInterval(setTime, 1000);
