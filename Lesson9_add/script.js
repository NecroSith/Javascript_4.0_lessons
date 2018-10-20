window.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth < 900) {} // Check if it is a mobile device
    else if (window.innerWidth >= 900) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0) { // Check if it is IE
            console.log('IE detected');
            document.querySelector('.modal').style.cssText = "@keyframes move { \
                0% {opacity: 0} 100% {opacity: 1;}}\
                animation: move 5s ease-in;";
        }
        else {
            var start = Date.now(); // Initial time
                timer = setInterval(function() { // Calculate how much time has passed since animation started
                var timePassed = Date.now() - start;

            if (parseInt(document.querySelector('.modal').style.opacity) >= 1) {
                clearInterval(timer); 
                return;
            }
    
            draw(timePassed);
            }, 50);

            function draw(timePassed) {
                document.querySelector('.modal').style.opacity = timePassed / 2000;
                document.querySelector('.modal').style.filter = 'alpha(opacity=' + timePassed / 2000 + ')';
            }
        }
    }

});