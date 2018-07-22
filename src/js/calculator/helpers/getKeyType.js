'use strict';

function getKeyType (key) {
    const {action} = key.dataset;
  
    if(!action) return 'number';

    if(['add','subtract', 'multiply', 'divide', 'nthRoot'].indexOf(action) > -1) return 'operator';

    if (['exponentiation','sqrRoot', 'log', 'factorial'].indexOf(action) > -1) return 'scientificOperator';

    return action
};

export default getKeyType;