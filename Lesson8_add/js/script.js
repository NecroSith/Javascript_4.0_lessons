window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(startingTab) {
        for (let i = startingTab; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(item) {
        if (tabContent[item].classList.contains('hide')) {
            tabContent[item].classList.remove('hide');
            tabContent[item].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                } 
            }
        }
    });

    hideTabContent(1);

    //Code for timer

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

    // Smooth scroll functionality

    let speed = 0.2, //Scroll speed 
        links = document.querySelectorAll('a[href^="#"]'); //Elements with links to scrollable sections

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            let elementHash = this.href.replace(/[^#]*(.*)/, '$1'), //Replace link to section with id number
                startScroll = window.pageYOffset, //Initial position 
                finishScroll = document.querySelector(elementHash).getBoundingClientRect().top, // Element position relative to browser window
                start = null;   // Time count
            
            requestAnimationFrame(step); // To make scroll smooth we request animation
            function step(time) {
                {
                   if (start === null) {
                       start = time;
                   }
                   let progress = time - start,
                       nowScroll = null; //Current scroll position
           
                   if (finishScroll < 0) { // To make smooth scrolls down
                       nowScroll = Math.max(startScroll - progress / speed, startScroll + finishScroll);
                   }
                   else { // To make smooth scrolls up
                       nowScroll = Math.min(startScroll + progress / speed, startScroll + finishScroll);
                   }
           
                   window.scrollTo(0, nowScroll); // Scroll to section
                   if (nowScroll != startScroll + finishScroll) { // If section is not on top of the browser window, start over animation
                       requestAnimationFrame(step);  
                    }
                    else {
                        location.hash = elementHash;
                    }
               };
            };
            return false;
        }
    }

});