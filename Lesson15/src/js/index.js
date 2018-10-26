window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabs = require('./parts/_tabs'),  
        timer = require('./parts/_timer'),
        smoothScroll = require('./parts/_scroll'),
        modal = require('./parts/_modal'),
        form = require('./parts/_form'),
        slider = require('./parts/_slider'),
        calc = require('./parts/_calc');

    tabs();
    timer();
    smoothScroll();
    modal();
    form();
    slider();
    calc();
});