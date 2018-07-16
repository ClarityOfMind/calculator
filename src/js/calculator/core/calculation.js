'use strict';

//Makes calculations with sipmle operators

function calculate (operand1, operator, operand2) {
    let Value1 = parseFloat(operand1);
    let Value2 = parseFloat(operand2);

    if (operator === 'add')      {return Value1 + Value2};
    if (operator === 'subtract') {return Value1 - Value2};
    if (operator === 'multiply') {return Value1 * Value2};
    if (operator === 'divide')   {return Value1 / Value2};
    if (operator === 'nthRoot')  {return calculateNthRoot(Value1, Value2)};
};

//Makes calculations with scientific operators

function scientificCalculate (operator, value) {
    let Value = parseFloat(value);

    if (operator === 'exponentiation') {return Math.pow(Value,2)};
    if (operator === 'sqrRoot')        {return Math.sqrt(Value)};
    if (operator === 'log')            {return Math.log(Value)};
    if (operator === 'factorial')      {return calculateFactorial (Value)};
};

// Calculates percentage function 

function calculatePercentage (firstValue, secondValue) {
    return +(firstValue / 100 * parseFloat(secondValue)).toFixed(15);
};

// factorial calculation function 

const memoizeFactorial = function () {
    let cache = {};
    
    return (value) => {
        if (value in cache) {
            console.log('Factorial got from cache!');
            return cache[value]
        } else {
            let result = (value != 1) ? value * calculateFactorial(value - 1) : 1;
            cache[value] = result;
            console.log('Factorial calculated');
            return result;
        }
    };    
};

const calculateFactorial = memoizeFactorial();

// nth root calculation function 

function calculateNthRoot(value, exponent) {
    if (value < 0 && n % 2 === 1)
        return -Math.pow(-value, 1/exponent);
    else
        return Math.pow(value, 1/exponent)
}

export {calculate,
    scientificCalculate, 
    calculatePercentage,
    calculateFactorial,
    calculateNthRoot}


 
