'use strict';

function clearLogJournal (calculator) {
    let clearButton =  calculator.querySelector('.calculator-logClearButton');

    clearButton.addEventListener('click', () => {
        Array.from(calculator.getElementsByClassName('.calculator-log'))
        .forEach(element => element.parentNode.removeChild(element));
    });
};

export default clearLogJournal;