let time = document.querySelector('#clock');

function showTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    let formatHours = convertForm(hours);

    hours = checkTime(hours);
    time.innerHTML = `${formatHours  } ${hours<10? `0${hours}` :hours } :${
        minutes <10 ? `0${minutes}`:minutes}:${
        seconds < 10 ? `0${seconds}` :seconds}`



}


function convertForm(time) {
    let form = 'AM'
    if (time >= 12) {
        format = "PM";
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

setInterval(showTime, 1000);