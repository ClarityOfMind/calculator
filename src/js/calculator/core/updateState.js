'use strict';

import getKeyType from "../helpers/getKeyType";
import clearState from "../helpers/clearState";

function updateState (key, calculatedValue, displayedValue, state, subDisplay) {

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

    if (keyType === 'number') {
        if (previousKeyType === 'calculate') {
            clearState(state, subDisplay);
        }
    }

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