'use strict';

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expense = prompt('Введите обязательную статью расходов в этом месяце', "");
            let cost = +prompt('Во сколько обойдется?');
    
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = money / 30;

        alert(`Ваш бюджет на день составляет ${appData.moneyPerDay} руб.`);
        detectLevel(appData.moneyPerDay);
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let point = prompt('Статья необязательных расходов?');
            Object.assign(appData['optionalExpenses'], { [i+1]:point});
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function() {
        let items;
        for (let i = 0; i < 1; i++) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую), ""');

            if (isNaN(+items) === false || items.trim() == '') {
                alert('Некорректное или пустое значение!');
                i--;
            } 
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        console.log(appData.income);
        let optIncomes = [];
        appData.income.forEach(function(item, i) {
           optIncomes.push(i+1, item);
        });
        alert('Способы доп. заработка: ' + optIncomes);
        
        console.log('Наша программа включает в себя данные:');
        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + key);
            // console.log(key + ':' + appData[key]);
        }
    }
};

function start() {
    money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    // appData.chooseExpenses();
    // appData.detectDayBudget();
    // appData.checkSavings();
    // appData.chooseOptExpenses();
    appData.chooseIncome();
}

start();
