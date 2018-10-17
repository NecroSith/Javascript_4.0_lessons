'use strict';

let menu = document.querySelector('.menu'),
    menuItems = document.getElementsByClassName('menu-item'),
    menuItemTwo = menuItems[2];
menu.insertBefore(menuItemTwo, menuItems[1]);

let menuItemFive = document.createElement('li');

menuItemFive.classList.add('menu-item');
menuItemFive.innerHTML = 'Пятый пункт';
menu.appendChild(menuItemFive);

document.body.style.background = "url(./img/apple_true.jpg) center no-repeat";

let title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

let attitude = prompt('Как вы относитесь к технике Apple?');

document.getElementById('prompt').innerHTML = attitude;