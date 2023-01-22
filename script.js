const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime()

// document.getElementById("countdown").innerHTML = countDownDate;

const  countDownTrigger = () => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = days;
};

countDownTrigger();
