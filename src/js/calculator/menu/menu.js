'use strict';

class Menu {
    constructor (id) {
        this.menu                   = id.querySelector('.calculator-menu');
        this.modeButton             = id.querySelector('.calculator-modeSwitcherButton');
        this.calculatorExtendedKeys = id.querySelector('.calculator-extendedKeys');
        this.mode                   = 'normal';
    };

    openMenu () {
        
        this.menu.classList.toggle('calculator-menu--opened')
    };

    switchMode (id) {

        if (this.mode  === 'normal') {
            var modeAnimation = this.modeButton .animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(18px)'}
            ],100);

            modeAnimation.addEventListener('finish', () => {
                this.modeButton .style.transform = 'translateX(18px)';
            });

            this.calculatorExtendedKeys.style.setProperty('display', 'block');
            
            this.mode  = 'engineering'
        } else {
            modeAnimation = this.modeButton .animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

            modeAnimation.addEventListener('finish', () => {
                this.modeButton .style.transform = 'translateX(0)';
            });

            this.calculatorExtendedKeys.style.setProperty('display', 'none');  

            this.mode  = 'normal'    
        };
    };
};

export default Menu;