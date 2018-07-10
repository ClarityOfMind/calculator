'use strict';

function openMenu(calculator) {
    const burger = calculator.querySelector('.calculator-burger');
    const menu = calculator.querySelector('.calculator-menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('calculator-menu--opened')
    });
};

export default openMenu;