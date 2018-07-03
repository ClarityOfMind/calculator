'use strict';

exports = function calculate (operand1, operator, operand2) {
    let Value1 = parseFloat(operand1);
    let Value2 = parseFloat(operand2);

    if (operator === 'add') {return Value1 + Value2};
    if (operator === 'subtract') {return Value1 - Value2};
    if (operator === 'multiply') {return Value1 * Value2};
    if (operator === 'divide') {return Value1 / Value2};
}

 