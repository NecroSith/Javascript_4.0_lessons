window.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth < 900) {} // Check if it is a mobile device
    else if (window.innerWidth >= 900) {
        if ('\v'=='v') { // Check if it is IE
            document.querySelector('.train').style.cssText = "@keyframes move { \
                from {margin-left: 0;} to {margin-left: 90%;} \
                animation: move 6s ease-in;";
        }
        else {
            var start = Date.now(); // Initial time
                timer = setInterval(function() { // Calculate how much time has passed since animation started
                var timePassed = Date.now() - start;

            if (parseInt(document.querySelector('.train').style.marginLeft.split('%')[0]) == 90) {
                clearInterval(timer); 
                return;
            }
    
            draw(timePassed);
            }, 20);

            function draw(timePassed) {
                document.querySelector('.train').style.marginLeft = timePassed / 100 + '%';
            }
        }
    }

});