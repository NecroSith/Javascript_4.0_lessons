'use strict';

let now = new Date(),
    year = now.getFullYear(),
    month = addZero(now.getMonth()+1),
    day = addZero(now.getDate()),
    hours = addZero(now.getHours()),
    minutes = addZero(now.getMinutes()),
    seconds = addZero(now.getSeconds()),
    weekDay = dayToString(now.getDay());

function addZero(item) {
    if (item < 10) {
        return "0" + item;
    }
    else {
        return item;
    }
}

function dayToString(day) {
    switch (day) {
        case 0:
            return "воскресеньк";
            break;
        case 1:
            return "понедельник";
            break;
        case 2:
            return "вторник";
            break;
        case 3:
            return "среда";
            break;
        case 4:
            return "четверг";
            break;
        case 5:
            return "пятница";
            break;
        case 6:
            return "суббота";
            break;
    }
}

document.write(`${hours}:${minutes}:${seconds} ${day}.${month}.${year} <br>`);
document.write(`Сегодня ${weekDay}`);


function getTimeDifference() {
    let from = document.getElementById('from').value,
        to = document.getElementById('to').value,
        dateFrom = new Date(from),
        dateTo = new Date(to),
        timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime()),
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById('result').value = diffDays;
}

let btnResult = document.getElementById('getResult');
btnResult.addEventListener('click', getTimeDifference);




