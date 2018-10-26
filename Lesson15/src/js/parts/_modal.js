function modal() {
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
}

module.exports = modal;