'use strict';

function updateDisplay ({mainDisplay, secondDisplay}, display, subDisplay) {

    if (mainDisplay === 0) display.textContent = '0';
    if (mainDisplay) display.textContent = mainDisplay;
    if (secondDisplay) subDisplay.textContent = secondDisplay;
};

export default updateDisplay;