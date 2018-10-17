'use strict';

function addZero(item) {
    if (item < 10) {
        return "0" + item;
    }
    else {
        return item;
    }
}

// let getTime = setTimeout(function() {
//     document.write(`${hours}:${minutes}:${seconds}`);
//     setTimeout(getTime, 1000);
// }, 1000);
function getTime() {
    let now = new Date(),
        timeBlock = document.querySelector('.time'),
        hours = addZero(now.getHours()),
        minutes = addZero(now.getMinutes()),
        seconds = addZero(now.getSeconds());

    // timeBlock.innerHTML = '';
    timeBlock.innerHTML = `${hours}:${minutes}:${seconds}`;
    setTimeout(getTime, 1000);
};

getTime();





