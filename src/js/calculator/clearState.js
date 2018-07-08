'use strict';

function clearState (state, subDisplay) {
    state.firstValue = '';
    state.operator = '';
    state.secondValue = '';
    state.previousKeyType = '';
    subDisplay.textContent = '';
};

export default clearState;