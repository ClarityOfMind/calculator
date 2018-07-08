'use strict';

function switchTheme () {
    var themeSwitcher = document.querySelector('.header-themeSwitcherFrame');
    var theme ='day';

themeSwitcher.addEventListener ('click', () => {
    var themeButton = document.querySelector('.header-themeSwitcherButton');
        if (theme === 'day') {
            var themeAnimation = themeButton.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(26px)'}
            ],100);

            themeAnimation.addEventListener('finish', () => {
                themeButton.style.transform = 'translateX(26px)';
            });

            document.body.style.setProperty('--calculator-bg-color', '#000000');
            document.body.style.setProperty('--main-text-color', '#ffffff');
            document.body.style.setProperty('background-color', '#737373');
            document.body.style.setProperty('--operatorButton-bg-color', '#e6e6e6');
            document.body.style.setProperty('--equalButton-bg-color', '#ff6600');
            document.body.style.setProperty('--logo-color', '#ffffff');
            document.body.style.setProperty('--themeSwitcher-bg-color', '#ff6600');
            
            theme = 'night'
        } else {
            themeAnimation = themeButton.animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

            themeAnimation.addEventListener('finish', () => {
                    themeButton.style.transform = 'translateX(0)';
                });

                document.body.style.setProperty('--calculator-bg-color', '#ffffff');
                document.body.style.setProperty('--main-text-color', '#000000');
                document.body.style.setProperty('background-color', '#ffffff');
                document.body.style.setProperty('--operatorButton-bg-color', '#e6f2ff');
                document.body.style.setProperty('--equalButton-bg-color', '#737373');
                document.body.style.setProperty('--logo-color', '#000000');
                document.body.style.setProperty('--themeSwitcher-bg-color', '#737373');
                theme = 'day'    
        }
    });
};

export default switchTheme;