/* Exercitiul 2 */
let m = 0,
    s = 0,
    ms = 0,
    timer;

const timerContainer = document.querySelector(".timer");

const startTimer = () => {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

const run = () => {
    timerContainer.textContent = `${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s} : ${ms < 10 ? '0' + ms : ms}`;

    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        m++;
    }
}

const stopTimer = () => {
    clearInterval(timer);
    timer = false;
}

const resetTimer = () => {
    stopTimer();
    m = s = ms = 0;
    timerContainer.textContent = '00 : 00 : 00';
}