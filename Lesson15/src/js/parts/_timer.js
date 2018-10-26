function timer() {
    let deadline = '2018-10-18';

    function getRemainingTime(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),  // Difference between time til deadline and time till now
            seconds = addZero(Math.floor(t/1000) % 60),  // Get seconds
            minutes = addZero(Math.floor(t/1000/60) % 60), //Get minutes
            hours = addZero(Math.floor(t/(1000*60*60))); //Get hours
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function addZero(item) {
        if (item < 10) {
            return "0" + item;
        }
        else {
            return item;
        }
    }

    function setTimer(id, endTime) { // Initialize timer
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTimer, 1000);

        function updateTimer() { // Update timer every 1 second to show newest values
            let t = getRemainingTime(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total < 0) { // If time is over - display only zeros
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setTimer('timer', deadline);
}

module.exports = timer;