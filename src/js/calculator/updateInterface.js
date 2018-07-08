'use strict';

import getKeyType from "./getKeyType";
import removePressedOperatorButton from './removePressedOperatorButton';

function updateInterface (key, state, display, subDisplay, calculator) {
    const keyType = getKeyType(key);

    removePressedOperatorButton (state, subDisplay);

    if (keyType === 'operator') key.classList.add('calculator-operatorKey--isPressed');
    if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC';
    if (keyType !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE';
    }


    if (display.textContent.length < 18) {
        display.style.setProperty('font-size', '30px')
    };

    if (display.textContent.length > 18) {
        display.style.setProperty('font-size', '20px')
    };

    if (display.textContent.length > 28) {
        display.style.setProperty('font-size', '10px')
    }


    if (subDisplay.textContent.length < 30) {
        subDisplay.style.setProperty('font-size', '15px')
    };

    if (subDisplay.textContent.length > 30) {
        subDisplay.style.setProperty('font-size', '10px')
    };

    if (subDisplay.textContent.length > 60) {
        subDisplay.style.setProperty('font-size', '8px')
    };
}

export default updateInterface;