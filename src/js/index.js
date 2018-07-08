'use strict';

import initCalculator    from './calculator/calculator';
import switchTheme       from './calculator/switchTheme';
import switchMode        from './calculator/switchMode';


/* const calculator = document.querySelector('.calculator');
const keys       = document.querySelector('.calculator-keys');
const display    = document.querySelector('.calculator-display');
const subDisplay = document.querySelector('.calculator-subDisplay');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key               = e.target;
        const displayedValue    = display.textContent;
        const subDisplayedValue = subDisplay.textContent;
        const displayData       = createData(key, displayedValue, subDisplayedValue, calculator.dataset, subDisplay);

        updateDisplay (displayData, display, subDisplay);
        updateState (key, displayData.mainDisplay, displayedValue, calculator.dataset, subDisplay);
        updateInterface(key, calculator.dataset, subDisplay, calculator);
    }
}); */

initCalculator('.calculator')
switchTheme ();
switchMode ();
