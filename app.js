const input = document.querySelector(".date-picker");
const targetYear = document.querySelector(".target-year");
const targetMonth = document.querySelector(".target-month");
const targetDates = document.querySelector(".target-dates");
const yearMonthArea = document.querySelector(".year-month-area");

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

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

yearMonthArea.addEventListener("click", changeMonth);

function changeMonth(e) {
  const behavior = e.target.getAttribute("class");
  if (!behavior.includes("fa-solid")) return;
  if (behavior.includes("fa-angle-left")) {
    month -= 1;
  } else if (behavior.includes("fa-angle-right")) {
    month += 1;
  }
  checkMonthLimit();
  render();
}

function checkMonthLimit() {
  if (month > 11) {
    month = 0;
    year += 1;
  } else if (month < 0) {
    month = 11;
    year -= 1;
  }
}

function calcDates() {
  if (month === 3 || month === 5 || month == 8 || month === 10) {
    return 30;
  } else if (month === 1) {
    return year % 4 === 0 ? 29 : 28;
  } else {
    return 31;
  }
}

function render() {
  targetYear.textContent = year;
  targetMonth.textContent = months[month];
  let dates = ``;
  for (let i = 0; i < calcDates(); i++) {
    dates += `<span class="date">${i + 1}</span>`;
  }
  targetDates.innerHTML = dates;
}

render();
