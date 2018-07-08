'use strict';

import getKeyType from "./getKeyType";
import {    
    calculate,
    scientificCalculate,
    calculatePercentage,
    } 
from './calculation';

var subDisplayBuffer = '';
var scientificKeyBuffer = '';

function createData (key, displayedValue, subDisplayedValue, state, subDisplay,) {

    //Variables required

    const keyValue = key.textContent;
    const keyType  = getKeyType(key);
    const sign     = key.dataset.sign; 
    const {
        firstValue,
        secondValue,
        operator,
        previousKeyType,
    } = state;
    
    //This block of code is executed when clicked button with a digit

    if (keyType === 'number') {
        if (displayedValue === '0' || 
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate'
        ) {
            return  {mainDisplay: keyValue} 
        } else if (previousKeyType === 'percentage') {
            return {mainDisplay: keyValue, secondDisplay: subDisplayBuffer}
        } else {
            return {mainDisplay: displayedValue + keyValue}
        }
    };

    //This block of code is executed when clicked decimal button

    if (keyType === 'decimal') {  
        if (!displayedValue.includes(',')) {
            return {mainDisplay: displayedValue + ','};
        } 
        if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            return {mainDisplay: '0,'};
        }

        return {mainDisplay: displayedValue};
    };

    //This block of code is executed when clicked simple operator button

    if (keyType === 'operator') {
    
        if (firstValue && 
            operator &&
            previousKeyType !== 'operator' && 
            previousKeyType !== 'calculate'
        ) {
            var result = +calculate(firstValue, operator, displayedValue).toFixed(10);
        }
        
        if (
            subDisplay.textContent === '0' || 
            previousKeyType === 'scientificOperator' ||
            previousKeyType === 'percentage'
        ) {
            return {mainDisplay: result, secondDisplay: subDisplayedValue + ' ' + keyValue };
        } else {
            return {mainDisplay: result, secondDisplay: subDisplayedValue + ' ' + parseFloat(displayedValue) + ' ' + keyValue }
        };
    };

    //This block of code is executed when clicked clearance button

    if (keyType === 'clear') return {mainDisplay: '0'};

    //This block of code is executed when clicked equal button

    if (keyType === 'calculate') {

        if (firstValue) {
            let result1 = +calculate(displayedValue, operator, secondValue).toFixed(10);
            let result2 = +calculate(firstValue, operator, displayedValue).toFixed(10);

            return previousKeyType === 'calculate'
            ? {mainDisplay: result1, secondDisplay: ' '} 
            : {mainDisplay: result2, secondDisplay: ' '}
        };
    };                                

    //This block of code is executed when clicked percentage button --------------------------- issue !!!

    if (keyType === 'percentage') {
        let percent = calculatePercentage(firstValue, displayedValue);  
        let selfPercent = calculatePercentage(displayedValue, displayedValue);

        if(!percent) return {mainDisplay: '0', secondDisplay: '0'};
        if(previousKeyType === 'operator' || 
            previousKeyType === 'number' ||
            previousKeyType === 'decimal'
        ) {
            subDisplayBuffer = subDisplayedValue;
            return {mainDisplay: percent, secondDisplay: subDisplayBuffer + ' ' + percent};
        } else if (previousKeyType === 'percentage') {
            return {mainDisplay: percent, secondDisplay: subDisplayBuffer + ' ' + percent};
        } else if (previousKeyType === 'calculate') {
            return {mainDisplay: selfPercent, secondDisplay: selfPercent}; 
        }
    }

    //This block of code is executed when clicked scientific operator button
    
    if (keyType === 'scientificOperator') {
            state.scientificOperator = key.dataset.action;
                    
            if (previousKeyType !== 'scientificOperator') {
                state.prosessedValue = displayedValue;
                subDisplayBuffer = subDisplayedValue;
                scientificKeyBuffer = ' ' + sign + '(' + state.prosessedValue + ')';
                return {mainDisplay: scientificCalculate(state.scientificOperator, displayedValue), secondDisplay: subDisplayBuffer + scientificKeyBuffer};     
            } else {
                scientificKeyBuffer = ' ' + sign + '(' + scientificKeyBuffer + ')';
            }    
            return {mainDisplay: scientificCalculate(state.scientificOperator, displayedValue), secondDisplay: subDisplayBuffer + scientificKeyBuffer};
        };
};

export default createData;