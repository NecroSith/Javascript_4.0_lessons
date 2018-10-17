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

    var expense = prompt('Введите обязательную статью расходов в этом месяце', "");
    var cost = prompt('Во сколько обойдется?, "');

    Object.assign(appData['expenses'], { [expense]: cost} );
}

alert(`Ваш бюджет на день составляет ${money/30} руб.`);
console.log(appData['expenses']);