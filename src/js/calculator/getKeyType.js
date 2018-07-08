'use strict';

function getKeyType (key) {
    const {action} = key.dataset;
  
    if(!action) return 'number';
    if(
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator';

    if (
        action === 'exponentiation' ||
        action === 'sqrRoot' ||
        action === 'log' ||
        action === 'factorial'
    ) return 'scientificOperator';

    return action
};

export default getKeyType;