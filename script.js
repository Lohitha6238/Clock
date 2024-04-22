function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
    document.getElementById('clock').innerText = formattedTime;
}

function padNumber(number) {
    return (number < 10) ? '0' + number : number;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();