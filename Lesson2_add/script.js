'use strict';

// Первая часть усложненного задания
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let wrapper = document.createElement('div');
let dayBlock = document.createElement('span');
dayBlock.setAttribute('class', 'week-container__item');

for (let i = 0; i < week.length; i++) {
    dayBlock.innerHTML = week[i] + '<br>';
    console.log(week[i]);
    if (week[i] == 'Пятница') {
        dayBlock.style.fontStyle = 'italic';       
    }
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        dayBlock.style.fontWeight = '800';
        dayBlock.style.fontStyle = 'normal';
    }
    wrapper.appendChild(dayBlock);
    document.body.insertAdjacentHTML('beforeend', wrapper.innerHTML);
}

// Вторая часть усложненного задания
let arr = [];
let index = 0;
let threeSevenNumbers = 0;
// Генератор случайных чисел где минимум 1 будет начинаться на 3 или 7
while (index < 7) {
    let randomNum = (Math.floor(Math.random() * (100000 - 1) + 1)) + "";
    if ((randomNum[0] == 3 || randomNum[0] == 7) && threeSevenNumbers < 2) {
        arr.push(randomNum);
        threeSevenNumbers++;
        index++;
    }
    else {
        if (threeSevenNumbers == 0) {
            delete arr[index];
        }
        else {
            arr.push(randomNum);
            index++;
        }
    }
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 3 || arr[i][0] == 7) {
        console.log(arr[i]);
    }
}
