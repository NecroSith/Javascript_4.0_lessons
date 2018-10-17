'use strict';

let buttonCountId = document.getElementById('start'),
    resultTable = document.querySelector('.result-table'),
    budgetValue = document.querySelector('.budget-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optExpensesValue = document.querySelector('.optionalexpenses-value'),
    levelValue = document.querySelector('.level-value'),
    incomeValue = document.querySelector('.income-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    buttonApprove = document.getElementsByClassName('expenses-item-btn'),
    buttonApproveOpt = document.getElementsByClassName('optionalexpenses-btn'),
    buttonCount = document.getElementsByClassName('count-budget-btn'),
    optExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    savings = document.querySelector('#savings'),
    monthSavingValue = document.querySelector('.monthsavings-value'),
    yearSavingValue = document.querySelector('.yearsavings-value'),
    inputYear = document.querySelector('.year-value'),
    inputMonth = document.querySelector('.month-value'),
    inputDay = document.querySelector('.day-value');

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    chooseIncome: function() {
        
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        console.log(appData.income);
        let optIncomes = [];
        appData.income.forEach(function(item, i) {
            optIncomes.push(i+1, item);
        });
        alert('Способы доп. заработка: ' + optIncomes);
    }
};

buttonCountId.addEventListener('click', function() {
    money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed(2);
    inputYear.value = new Date(Date.parse(time)).getFullYear();
    inputMonth.value =  new Date(Date.parse(time)).getMonth()+1;
    inputDay.value = new Date(Date.parse(time)).getDate();
});

buttonApprove[0].disabled = true;
buttonCountId.disabled = true;

for (let i = 0; i < expensesItems.length; i++) {
    expensesItems[i].addEventListener('change', function() {
        buttonApprove[0].disabled = false;
        buttonCountId.disabled = false;
        if (expensesItems[i].textContent == undefined) {
            buttonApprove[0].disabled = true;
            buttonCountId.disabled = true;
        }
    });
}
buttonApproveOpt[0].disabled = true;
for (let i = 0; i < optExpensesItems.length; i++) {
    optExpensesItems[i].addEventListener('change', function() {
        buttonApproveOpt[0].disabled = false;
        if (optExpensesItems[i].textContent == undefined) {
            buttonApproveOpt[0].disabled = true;
        }
    });
}


buttonApprove[0].addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value;
        let b = +expensesItems[++i].value;

        

        if (typeof(a) === 'string' && typeof(a) != null && 
        typeof(b) != null && a != '' && b != ''
        && a.length < 50) {
           appData.expenses[a] = b;
           sum += b;
        }
        else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

buttonApproveOpt[0].addEventListener('click', function() {
    for (let i = 0; i < optExpensesItems.length; i++) {
        let point = optExpensesItems[i].value;
        appData.optionalExpenses = point;
        optExpensesValue.textContent += appData.optionalExpenses + ', ';
    }
});

buttonCount[0].addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 300) {
            levelValue.textContent = "Минимальный уровень достатка";
        }
        else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        }
        else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        }
        else {
            levelValue.textContent = "Что то пошло не так";
        }
    }
    else {
        dayBudgetValue.textContent = 'Ошибка данных';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    }
    else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingValue.textContent = appData.yearIncome.toFixed(2);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingValue.textContent = appData.yearIncome.toFixed(2);
    }
});