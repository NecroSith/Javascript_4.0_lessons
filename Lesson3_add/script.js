'use strict';

// Первый пункт
let str = "урок-3-был слишком легким";
let capStr = str.charAt(0).toUpperCase() + str.slice(1);

// Второй пункт
let newStr = capStr.replace(/-/g, ' ');
console.log(newStr);

// Третий пункт
if (newStr.indexOf('легким') !== -1){
    let searchWord = newStr.indexOf('легким').length;
    let separate = newStr.slice(newStr.indexOf('легким'), searchWord);
    let replaced = separate.replace(/им/g, 'оо');
    console.log(replaced);
}

// Четвертый пункт 
let arr = [20, 32, 1, "Человек", 2,3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        arr.splice(arr[i], 1);
    }
    else {
       sum += Math.pow(arr[i], 3);
    }
}
console.log(Math.sqrt(sum));

// Пятый пункт
function five(input) {
    if (typeof(input) == 'string') {
        let newInput = input.trim();
        if (newInput.length > 50) {
            let cutStr = newInput.slice(0, 50) + "...";
            console.log(cutStr);
        }
    }
    else {
        alert('Неверный тип данных!');
    }
}
five('Это пятый пункт усложненного урока номер три по Javascript');

