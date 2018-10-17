'use strict';

let buttonCountId = document.getElementById('start'),
    resultTable = document.querySelector('.result-table'),
    resultBlocks = resultTable.querySelectorAll('div[class$="-value"]'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    button = document.getElementsByTagName('button'),
    buttonApprove = document.getElementsByClassName('expenses-item-btn'),
    buttonApproveOpt = document.getElementsByClassName('optionalexpenses-btn'),
    buttonCount = document.getElementsByClassName('count-budget-btn'),
    optExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('input .count-budget-btn'),
    checkbox = document.querySelector('input[type="checkbox"]'),
    inputSum = document.querySelector('input#sum'),
    inputPercent = document.querySelector('input#percent'),
    inputYear = document.querySelector('year-value'),
    inputMonth = document.querySelector('month-value'),
    inputDay = document.querySelector('day-value');

console.log(buttonCountId);
console.log(resultBlocks);
console.log(expensesItems);
console.log(buttonApprove);
console.log(buttonApproveOpt);
console.log(buttonCount);
console.log(optExpensesItems);
console.log(chooseIncome);
console.log(checkbox);
console.log(inputSum);
console.log(inputPercent);
console.log(inputYear);
console.log(inputMonth);
console.log(inputDay);
