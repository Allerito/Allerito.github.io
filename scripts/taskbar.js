/**
 * Build taskbar dom container and manage page change active class
 */
function initTaskbar() {
  const taskbarContent = `
    <div id="nav-bar" class="nav-links">
        <a href="index.html" class="nav-item">Home</a>
        <a href="projects.html" class="nav-item">Projects</a>
        <a href="jobs.html" class="nav-item">Jobs</a>
    </div>

    <div class="datetime-container">
        <div class="date" id="date"></div>
        <div class="clock" id="clock"></div>
    </div>
  `;

  const taskbarContainer = document.querySelector(".taskbar-container");
  if (taskbarContainer) {
    taskbarContainer.innerHTML = taskbarContent;

    var pageFound = false;
    const navLinks = document.getElementById("nav-bar").children;
    for (let i = 0; i < navLinks.length; i++) {
      if (
        navLinks[i].href.split("/").reverse()[0] ===
        window.location.pathname.split("/").reverse()[0]
      ) {
        navLinks[i].classList.add("active");
        pageFound = true;
      }
    }
    if (!pageFound) {
      navLinks[0].classList.add("active");
    }
  }
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

initTaskbar();
dateUpdater();
clockUpdater();
