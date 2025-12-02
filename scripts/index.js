/**
 * Initialize the page by setting up the date and clock elements.
 */
function initPage() {
  dateUpdater();
  clockUpdater();
}

/**
 * Recursively updates the date element every second.
 */
function dateUpdater() {
  const dateElement = document.getElementById("date");

  let date = new Date();
  dateElement.textContent = date.toDateString();

  setTimeout(dateUpdater, 1000);
}

/**
 * Recursively updates the clock element every second.
 */
function clockUpdater() {
  const clockElement = document.getElementById("clock");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockElement.textContent = hours + ":" + minutes + ":" + seconds;

  setTimeout(clockUpdater, 1000);
}
