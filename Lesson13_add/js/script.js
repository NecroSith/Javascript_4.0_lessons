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

    let speed = 0.5, //Scroll speed 
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

    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        let modal = new Modal(this, overlay, 'more-splash');
        modal.show();
    });

    close.addEventListener('click', function() {
        let modal = new Modal(this, overlay, 'more-splash');
        modal.hide();
    });

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            let modal = new Modal(this, overlay, 'more-splash');
            modal.show();
        });
    }

    function Modal(aboutElement, overlay, animationClass = '') {
        this.aboutElement = aboutElement;
        this.overlay = overlay;
        if (animationClass != '') {
            this.animationClass = animationClass;
        }
        this.show = function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (this.animationClass) {
                    aboutElement.classList.add('more-splash');
                }

            }
        this.hide = function() {
            document.body.style.overflow = '';
            if (this.animationClass) {
                    aboutElement.classList.remove('more-splash');
                }
            }
            overlay.style.display = 'none';
        }

        let message = {
            loading: '<img src="/img/ajax-loader.gif">',
            success: '<img src="/img/success.svg">',
            failure: '<img src="/img/error.svg">'
        };

        let form = document.querySelector('.main-form'),
            feedbackForm = document.querySelector('.feedback-form'),
            input = form.getElementsByTagName('input'),
            feedbackInput = feedbackForm.getElementsByTagName('input'),
            statusIcon = document.createElement('div');

        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     sendJSONData(form, statusIcon, input, 'status-abs');
        // });   
        
        // feedbackForm.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     sendJSONData(feedbackForm, statusIcon, feedbackInput, 'status');
        // });

        function sendJSONData(element, status) {
            element.addEventListener('submit', function(e) {
                e.preventDefault();
                statusIcon.classList.add(status);
                element.appendChild(statusIcon);
                let formData = new FormData(element);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            }
                            else if (request.readyState === 4) {
                                if (request.status == 200) {
                                    resolve();
                                }
                                else {
                                    reject();
                                }
                            }
                        }
                        request.send(data);
                    });
                }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
    
            postData(formData)
                            .then(() => statusIcon.innerHTML = message.loading)
                            .then(() => statusIcon.innerHTML = message.success)
                            .catch(() => statusIcon.innerHTML = message.failure)
                            .then(clearInput);
            });
        }

        sendJSONData(form, 'status-abs');
        sendJSONData(feedbackForm, 'status');


        // Slider 

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

        function showSlides(item) {

            if (item > slides.length) {
                slideIndex = 1;
            }
            if (item < 1) {
                slideIndex = slides.length;
            }
            slides.forEach((slide) => {
                slide.style.display = 'none';
                slide.style.opacity = 0.1;
            });
            dots.forEach((dot) => dot.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            changeOpacity(slides[slideIndex - 1], 0, 1);

            dots[slideIndex - 1].classList.add('dot-active');
        };

        function changeOpacity(element, from, to) {
            let timer = setInterval(function() {
                if (from >= to) {
                    clearInterval(timer);
                }
                else {
                    from += 0.1;
                    element.style.opacity = from;
                }
            }, 100);
        }

        function nextSlide(item) {
            showSlides(slideIndex += item);
        }

        function currentSlide(item) {
            showSlides(slideIndex = item);
        }

        next.addEventListener('click', function() {
            nextSlide(1);
        });

        prev.addEventListener('click', function() {
            nextSlide(-1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });

        showSlides(slideIndex);

        // Calc

        let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            }
            else {
                // totalValue.innerHTML = total;
                scroll(total);
            }
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '' || restDays.value == '') {
                totalValue.innerHTML = 0;
            }
            else {
                // totalValue.innerHTML = total;
                scroll(total);
            }
        })

        persons.addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9]/, '');
        });
        restDays.addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9]/, '');
        });

        place.addEventListener('change', function() {
            if (persons.value == '' || restDays.value == '') {
                totalValue.innerHTML = 0;
            }
            else {
                let a = total;
                let result = a * this.options[this.selectedIndex].value;
                scroll(result);
            }
        });

        function scroll(value){
            let i = 0;
            let interval = setInterval(function() {
                if (i <= value) {
                    totalValue.innerHTML = i;
                    i = i + 600;
                }
                else {
                    clearInterval(interval);
                    totalValue.innerHTML = value;
                }
            },1); 
        };
});