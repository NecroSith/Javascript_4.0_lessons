function smoothScroll() {
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
}

module.exports = smoothScroll;