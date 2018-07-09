'use strict';

import createData        from './core/createData';
import updateState       from './core/updateState';
import updateDisplay     from './core/updateDisplay';
import updateInterface   from './core/updateInterface';
import switchTheme       from '../calculator/theme/switchTheme';
import switchMode        from '../calculator/theme/switchMode';

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

    switchTheme ();
    switchMode ();
};

export default initCalculator;

