function calc() {
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

            if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            }
            else {
                let a = total;
                let result = a * place.options[place.selectedIndex].value;
                scroll(result);
            }
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
                totalValue.innerHTML = 0;
            }
            else {
                let a = total;
                let result = a * place.options[place.selectedIndex].value;
                scroll(result);
            }
        })

        persons.addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9]/, '');
        });
        restDays.addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9]/, '');
        });

        place.addEventListener('change', function() {
            if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
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
                    totalValue.innerHTML = parseInt(value);
                }
            },1); 
        };
}

module.exports = calc;