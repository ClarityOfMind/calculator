'use strict';
const calculator = document.querySelector('.calculator');
const keys       = calculator.querySelector('.clculator-keys');
const key = e.target;
const action = key.dataset.action;

keys.addEventListener ('click', e => {
    if (key.matches('button')) {
        if (!action) {}
    }
});



