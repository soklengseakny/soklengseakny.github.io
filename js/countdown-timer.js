function countdown() {
    var now = new Date();

    // This is where you set the date to count down to in the format (year, month, day).
    var eventDate = new Date(2021, 9, 18, 9);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = currentTime - eventTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var y = Math.floor(d / 365);

    d %= 365;
    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById("years").textContent = y;
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
countdown();