'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expense = prompt('Введите обязательную статью расходов в этом месяце', "");
    let cost = +prompt('Во сколько обойдется?, "');

    if (typeof(expense) === 'string' && typeof(expense) != null && 
    typeof(cost) != null && expense != '' && cost != ''
    && expense.length < 50) {
        console.log('done');
        Object.assign(appData['expenses'], { [expense]: cost} );
    }
    else {
        console.log('error');
        i--;
    }
}

// Второй вариант решения, с помощью цикла while 
// let i = 0;
// while (i < 2) {
//     let expense = prompt('Введите обязательную статью расходов в этом месяце', "");
//     let cost = +prompt('Во сколько обойдется?, "');

//     if (typeof(expense) === 'string' && typeof(expense) != null && 
//     typeof(cost) != null && expense != '' && cost != ''
//     && expense.length < 50) {
//         console.log('done');
//         Object.assign(appData['expenses'], { [expense]: cost} );
//     }
//     else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// Третий вариант решения, с помощью цикла do-while
// let i = 0;
// do {
//     let expense = prompt('Введите обязательную статью расходов в этом месяце', "");
//     let cost = +prompt('Во сколько обойдется?, "');

//     if (typeof(expense) === 'string' && typeof(expense) != null && 
//     typeof(cost) != null && expense != '' && cost != ''
//     && expense.length < 50) {
//         console.log('done');
//         Object.assign(appData['expenses'], { [expense]: cost} );
//     }
//     else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2) 

appData.moneyPerDay = money / 30;

alert(`Ваш бюджет на день составляет ${appData.moneyPerDay} руб.`);

if (appData.moneyPerDay < 300) {
    console.log('Минимальный уровень достатка!');
}
else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
}
else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
}
else {
    console.log('Ошибка! Что-то пошло не так...');
}