'use strict';

function switchMode () {
    var modeSwitcher = document.querySelector('.header-modeSwitcherFrame');
    var mode ='normal';

modeSwitcher.addEventListener ('click', () => {
    var modeButton = document.querySelector('.header-modeSwitcherButton');
    var calculatorExtendedKeys = document.querySelector('.calculator-extendedKeys');
        if (mode === 'normal') {
            var modeAnimation = modeButton.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(26px)'}
            ],100);

            modeAnimation.addEventListener('finish', () => {
                modeButton.style.transform = 'translateX(26px)';
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