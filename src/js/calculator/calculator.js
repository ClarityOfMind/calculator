'use strict';

import createData        from './core/createData';
import updateState       from './core/updateState';
import updateDisplay     from './core/updateDisplay';
import updateInterface   from './core/updateInterface';
import switchTheme       from '../calculator/theme/switchTheme';
import switchMode        from '../calculator/theme/switchMode';
import openMenu          from './helpers/openMenu';
import clearLogJournal   from './helpers/clearLogJournal';
import openLogJournal    from '../calculator/theme/openLogJournal';

function initCalculator (id) {

    //Define variables required

    const calculator = document.querySelector(`${id} .calculator`);
    const keys       = calculator.querySelector('.calculator-keys');
    const display    = calculator.querySelector('.calculator-display');
    const subDisplay = calculator.querySelector('.calculator-subDisplay');

    keys.addEventListener('click', e => {
    //Set listener when any calculator key is pushed    
        if (e.target.matches('button')) {
            const key               = e.target;
            const displayedValue    = display.textContent;
            const subDisplayedValue = subDisplay.textContent;
            const displayData       = createData(calculator, key, displayedValue, subDisplayedValue, calculator.dataset, subDisplay);

            updateDisplay (displayData, display, subDisplay);
            updateState (key, displayData.mainDisplay, displayedValue, calculator.dataset, subDisplay);
            updateInterface(key, calculator.dataset, display, subDisplay, calculator);
        }
    });


    switchTheme ();

    openLogJournal(calculator);

    switchMode(calculator);

    openMenu(calculator);

    clearLogJournal(calculator)
};

export default initCalculator;

