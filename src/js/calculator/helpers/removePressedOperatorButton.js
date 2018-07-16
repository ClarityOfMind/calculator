'use strict';

function removePressedOperatorButton (calculator) {
    Array.from(calculator.getElementsByClassName('calculator-operatorKey'))
    .forEach(element => element.classList.remove('calculator-operatorKey--isPressed'));
}

export default removePressedOperatorButton;