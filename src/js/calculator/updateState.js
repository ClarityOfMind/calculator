'use strict';

import getKeyType from "./getKeyType";
import clearState from "./clearState";

function updateState (key, calculatedValue, displayedValue, state, subDisplay, subDisplayBuffer) {

    //Variables required

    const keyType = getKeyType(key)
    const {
        firstValue,
        operator,
        secondValue,
        previousKeyType,
    } = state

    //Sets up identificator of a previous pressed button

    state.previousKeyType = keyType;

    //This block of code is executed when clicked simple operator button

    if (keyType === 'operator') {
        state.operator = key.dataset.action;  
        state.firstValue = firstValue && 
        operator &&
        previousKeyType !== 'operator' && 
        previousKeyType !== 'calculate'
        ? calculatedValue
        : displayedValue;
    };

    //This block of code is executed when clicked clearance button

    if (keyType === 'clear' && key.textContent === 'AC') {
        clearState(state, subDisplay);
    }

    //This block of code is executed when clicked equal button

    if (keyType === 'calculate') {
        state.secondValue = firstValue && previousKeyType === 'calculate'
        ? secondValue
        : displayedValue; 
    };
};

export default updateState;