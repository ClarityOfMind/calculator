'use strict';

function switchMode(calculator) {
    let modeSwitcher = calculator.querySelector('.calculator-modeSwitcherFrame');
    var mode = 'normal';
    
modeSwitcher.addEventListener ('click', () => {
    var modeButton = calculator.querySelector('.calculator-modeSwitcherButton');
    var calculatorExtendedKeys = calculator.querySelector('.calculator-extendedKeys');
        if (mode === 'normal') {
            var modeAnimation = modeButton.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(18px)'}
            ],100);

            modeAnimation.addEventListener('finish', () => {
                modeButton.style.transform = 'translateX(18px)';
            });

            calculatorExtendedKeys.style.setProperty('display', 'block');
            
            mode = 'engineering'
        } else {
            modeAnimation = modeButton.animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

            modeAnimation.addEventListener('finish', () => {
                modeButton.style.transform = 'translateX(0)';
            });

            calculatorExtendedKeys.style.setProperty('display', 'none');  

            mode = 'normal'    
        };
    });
};

export default switchMode;