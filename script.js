const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime()

// document.getElementById("countdown").innerHTML = countDownDate;

const  countDownTrigger = () => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";
};

const countdown = setInterval(countDownTrigger, 1000);

countDownTrigger();
