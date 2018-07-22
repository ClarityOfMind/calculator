'use strict';

function removePressedOperatorButton (id) {
    Array.from(id.getElementsByClassName('calculator-operatorKey'))
    .forEach(element => element.classList.remove('calculator-operatorKey--isPressed'));
}

export default removePressedOperatorButton;