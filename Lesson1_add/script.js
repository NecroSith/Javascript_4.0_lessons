'use strict';

let num = "33721",
    total = 1,
    result = 0;

for (let i = 0; i < num.length; i++) {
    total *= +num[i];
}

console.log(`Результат произведения цифр числа ${num}: ${total} `);

result = (total ** 3).toString(10);

alert("Первые две цифры результата: " + result[0] + result[1]);

