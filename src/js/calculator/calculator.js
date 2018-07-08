'use strict';

import createData        from './createData';
import updateState       from './updateState';
import updateDisplay     from './updateDisplay';
import updateInterface   from './updateInterface';

function initCalculator (id) {
    const calculator = document.querySelector(id);
    const keys       = calculator.querySelector('.calculator-keys');
    const display    = calculator.querySelector('.calculator-display');
    const subDisplay = calculator.querySelector('.calculator-subDisplay');

    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key               = e.target;
            const displayedValue    = display.textContent;
            const subDisplayedValue = subDisplay.textContent;
            const displayData       = createData(key, displayedValue, subDisplayedValue, calculator.dataset, subDisplay);

            updateDisplay (displayData, display, subDisplay);
            updateState (key, displayData.mainDisplay, displayedValue, calculator.dataset, subDisplay);
            updateInterface(key, calculator.dataset, display, subDisplay, calculator);
        }
    });
};

export default initCalculator;

