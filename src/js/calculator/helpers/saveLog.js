'use strict';

function saveLog (calculator,subDisplay, displayedValue, previousKeyType) {
    let logJournal = calculator.querySelector('.calculator-logJournal')
    let div = document.createElement('div');
    div.classList.add('.calculator-log')

    if(previousKeyType === 'scientificOperator' || previousKeyType === 'percentage') {
        div.textContent = subDisplay.textContent
    } else {
        div.textContent = subDisplay.textContent + ' ' + displayedValue;
    }
    
    logJournal.appendChild(div);
};

export default saveLog;