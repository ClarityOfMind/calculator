'use strict';

import getKeyType from "./getKeyType";
import removePressedOperatorButton from './removePressedOperatorButton';

function updateInterface (key, state, subDisplay, calculator) {
    const keyType = getKeyType(key);

    removePressedOperatorButton (state, subDisplay);

    if (keyType === 'operator') key.classList.add('calculator-operatorKey--isPressed');
    if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC';
    if (keyType !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE';
    }
}

export default updateInterface;