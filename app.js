const input = document.querySelector(".date-picker");
const targetYear = document.querySelector(".target-year");
const targetMonth = document.querySelector(".target-month");
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
  if (behavior.includes("fa-angle-left")) {
    month -= 1;
  } else if (behavior.includes("fa-angle-right")) {
    month += 1;
  }
  if (month > 11) {
    month = 0;
  } else if (month < 0) {
    month = 11;
  }
  render();
}

function init() {
  targetYear.textContent = year;
  targetMonth.textContent = months[month];
}

function render() {
  targetYear.textContent = year;
  targetMonth.textContent = months[month];
}

init();
