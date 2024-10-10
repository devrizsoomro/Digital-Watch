// script.js
function updateClock() {
    const clock = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Time part (AM/PM)
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = 'AM';

    // Convert 24-hour format to 12-hour format
    if (hours >= 12) {
        ampm = 'PM';
        if (hours > 12) {
            hours = hours - 12;
        }
    } else if (hours === 0) {
        hours = 12; // Midnight case
    }

    // Format hours, minutes, and seconds to be two digits (e.g., 09:05:09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Time string with AM/PM
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    clock.textContent = timeString;

    // Date part
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Format the date string (e.g., "Wednesday, 01 January 2024")
    const dateString = `${day}, ${date < 10 ? '0' + date : date} ${month} ${year}`;
    dateElement.textContent = dateString;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
