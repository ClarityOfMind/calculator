'use strict';

function updateDisplay ({mainDisplay, secondDisplay}, display, subDisplay) {

    if (mainDisplay) display.textContent = mainDisplay;
    if (secondDisplay) subDisplay.textContent = secondDisplay;
};

export default updateDisplay;