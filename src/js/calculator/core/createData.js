'use strict';
import LogJournal                  from '../log-journal/log-journal'; 
import getKeyType                  from '../helpers/getKeyType';
import removePressedOperatorButton from '../helpers/removePressedOperatorButton';
import { calculate,
    scientificCalculate,
    calculatePercentage,
} from './calculation';

let calcBuffer;
let subDisplayBuffer;
let subDisplayBuffer2;
let percentageBuffer;
let scientificKeyBuffer = '';
let isCalculated= false;

function createData(id, key) {

    const display           = id.querySelector('.calculator-display');
    const subDisplay        = id.querySelector('.calculator-subDisplay');
    const clearButton       = id.querySelector('[data-action=clear]');
    const displayedValue    = display.textContent;
    const subDisplayedValue = subDisplay.textContent;
    const keyValue          = key.textContent;
    const keyType           = getKeyType(key);
    const sign              = key.dataset.sign; 
    const state             = id.dataset;
    const {
        firstValue,
        secondValue,
        operator,
        previousKeyType,
    } = state;

    let result = '';
    let isReadyForCalculation = firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate';
    

    switch (keyType) {
        case 'number':
            result = performForNumber();
            break;
        case 'operator':
            result = performForOperator();
            break;
        case 'scientificOperator':
            result = performForScientificOperator();
            break;
        case 'decimal':
            result = performForDecimal();
            break;
        case 'percentage':
            result = performForPercentage();
            break;     
        case 'changeSign':
            result = changeSign();
            break;
        case 'calculate':
            result = makeCalculation();
            break;
        case 'clear':
            result = {mainDisplay: '0'};                       
    };

    updateState ()

    function updateState () {
        state.previousKeyType = keyType;
        removePressedOperatorButton (id);
        if (keyType !== 'clear') clearButton.textContent = 'CE';

        switch (keyType) {
            case 'number':
                switch (previousKeyType) {
                    case 'operator':
                        state.secondValue = keyValue;
                        break;
                    case 'calculate':
                        state.firstValue = ''
                };
                if (previousKeyType === 'operator') {
                    state.secondValue = keyValue;
                };
                break;
            case 'operator':
                isCalculated= false;
                key.classList.add('calculator-operatorKey--isPressed')
                state.operator = key.dataset.action;
                state.firstValue = isReadyForCalculation
                ? result.mainDisplay
                : displayedValue;
                break;
            case 'calculate':    
                isCalculated = previousKeyType !== 'calculate'? true : false;
                switch (previousKeyType) {
                    case 'scientificOperator':
                    case 'percentage':
                        state.secondValue = displayedValue;  
                };
                break;
            case 'clear':
                if (clearButton.textContent === 'CE') {
                    clearButton.textContent = 'AC'
                } else {
                    clearState();  
                };
                              
        };
    }

    function performForNumber () {
        if (displayedValue === '0') return {mainDisplay: keyValue};

        switch (previousKeyType) {
            case 'operator':
            case 'calculate':
            case 'nthRoot':
                return {mainDisplay: keyValue} 
                break;
            case 'percentage':
                return {mainDisplay: keyValue, secondDisplay: subDisplayBuffer}
                break;
            default:
                return {mainDisplay: displayedValue + keyValue}        
        };
    };

    function performForOperator () {
        
        if (isReadyForCalculation) {
            calcBuffer = calculate(firstValue, operator, displayedValue)
        };

        if (subDisplay.textContent === '0' ) {
            return {mainDisplay: calcBuffer, secondDisplay: subDisplayedValue + ' ' + keyValue };
        }

        switch (previousKeyType) {
            case 'operator':
               
                return {secondDisplay: subDisplayBuffer + ' ' + keyValue}
                break;
            case 'calculate':
                subDisplayBuffer = displayedValue;
                
                return {secondDisplay: subDisplayedValue + ' ' + parseFloat(displayedValue) + ' ' + keyValue }   
            case 'percentage':
            case 'scientificOperator':
                subDisplayBuffer = subDisplayedValue;
                return {mainDisplay: calcBuffer, secondDisplay: subDisplayBuffer + ' ' + keyValue};
                break;  
            default:
                subDisplayBuffer = (subDisplayedValue + ' ' + displayedValue) || displayedValue;    
                return {mainDisplay: calcBuffer, secondDisplay: subDisplayedValue + ' ' + parseFloat(displayedValue) + ' ' + keyValue }
        }

    };

    function performForScientificOperator () {
        state.scientificOperator = key.dataset.action;

        if (previousKeyType !== 'scientificOperator') {
            state.prosessedValue = displayedValue;
            subDisplayBuffer2 = subDisplayedValue;
            scientificKeyBuffer = ' '+ sign + '(' + state.prosessedValue + ')';
            return {mainDisplay: scientificCalculate(state.scientificOperator, displayedValue), secondDisplay: subDisplayBuffer2 + scientificKeyBuffer};     
        } else {
            scientificKeyBuffer = ' ' + sign + '(' + scientificKeyBuffer + ')';
        }    
        return {mainDisplay: scientificCalculate(state.scientificOperator, displayedValue), secondDisplay: subDisplayBuffer2 + scientificKeyBuffer};
    };

    function performForDecimal() {
        if (!displayedValue.includes('.')) {
            return {mainDisplay: displayedValue + '.'};
        };

        switch (previousKeyType) {
            case 'operator':
            case 'calculate':
                return {mainDisplay: '0.'};
                break;
            default: 
                return {mainDisplay: displayedValue};
        };
    };

    function performForPercentage() {
        let percent = calculatePercentage(firstValue, displayedValue);  
        let selfPercent = calculatePercentage(displayedValue, displayedValue);

        if(!percent) return {mainDisplay: '0', secondDisplay: '0'};
        
        switch (previousKeyType) {
            case 'operator':
            case 'number':
            case 'decimal':
                percentageBuffer = subDisplayedValue;
                return {mainDisplay: percent, secondDisplay: percentageBuffer + ' ' + percent};
                break;
            case 'percentage':
                return {mainDisplay: percent, secondDisplay: subDisplayBuffer + ' ' + percent};
                break;
            case 'calculate':
                return {mainDisplay: selfPercent, secondDisplay: selfPercent};   
        };
    };

    function changeSign () {
        let value = parseFloat(displayedValue);
        if (value < 0) {
            return {mainDisplay: Math.abs(value)}
        } else return {mainDisplay: value * -1}
    };

    function makeCalculation () {
            let firstTimeCalculation = calculate(firstValue, operator, displayedValue);
            let anotherCalculation = calculate(displayedValue, operator, secondValue);

            switch (previousKeyType) {
                case 'calculate':
                    return {mainDisplay: anotherCalculation, secondDisplay: ' '};
                    break;  
                default:
                LogJournal.saveLog(id, subDisplay, displayedValue, previousKeyType);
                    return isCalculated ? {mainDisplay: anotherCalculation, secondDisplay: ' '} : {mainDisplay: firstTimeCalculation, secondDisplay: ' '}    
            };
        
    };

    function clearState () {
            state.firstValue = '';
            state.operator = '';
            state.secondValue = '';
            state.previousKeyType = '';
            subDisplay.textContent = '';
    };

    return result;
};



export default createData;