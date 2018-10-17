'use strict';

let box = document.querySelector('.box'),
        frame = document.querySelector('.frame'),
        animationFrame,
        height = box.style.height,
        width = box.style.width;

function step() {
    setTimeout(function() {
        requestAnimationFrame(step);
        if (box.style.width == 400 + 'px') {
            if (box.style.height == 400 + "px") {
                animationFrame = window.cancelAnimationFrame(step);
            }
            else {  
                height++;
                box.style.height = height + "px";
            }
        }
        else {
            width++;
            box.style.width = width + "px";
        }
    }, 4);
}

document.querySelector('.launch').addEventListener('click', function() {
    step();
 });