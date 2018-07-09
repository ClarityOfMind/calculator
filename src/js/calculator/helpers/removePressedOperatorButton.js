'use strict';

function removePressedOperatorButton () {
    Array.from(document.getElementsByClassName('calculator-operatorKey'))
    .forEach(element => element.classList.remove('calculator-operatorKey--isPressed'));
}

export default removePressedOperatorButton;