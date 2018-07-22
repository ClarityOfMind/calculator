'use strict';

function clearLogJournal (id) {
    let clearButton =  id.querySelector('.calculator-logClearButton');

    clearButton.addEventListener('click', () => {
        Array.from(id.getElementsByClassName('.calculator-log'))
        .forEach(element => element.parentNode.removeChild(element));
    });
};

export default clearLogJournal;