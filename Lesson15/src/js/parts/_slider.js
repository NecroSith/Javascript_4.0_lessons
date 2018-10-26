function slider() {
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
}

module.exports = slider;