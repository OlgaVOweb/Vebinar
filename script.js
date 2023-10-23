function vebinarCountdown(){
    const vebinarDate = new Date('May 10, 2023 18:00');
    const now = new Date ();
    const diff = vebinarDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHours = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0 ){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        vebinarDating();
    }
}

let timerID = setInterval(vebinarCountdown, 1000);

function vebinarDating(){
    const heading = document.querySelector('h5');
    heading.textContent = 'Вебинар начался!';
    heading.classList.add('astro');
}

const image = document.querySelector("#planet");
const button = document.querySelector("#submit");

button.addEventListener("click", () => {
    image.style.display = "block";
})