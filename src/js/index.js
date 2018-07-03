'use strict';

require('bootstrap');

const calculator  = document.querySelector('.calculator');
const keys        = calculator.querySelector('.calculator-keys');
const display     = document.querySelector('.calculator-display');
const subDisplay  = document.querySelector('.calculator-subDisplay');
const operators   = document.getElementsByClassName('calculator-operatorKey');
const clearButton = calculator.querySelector('[data-action=clear]');
var subDisplayContent = '';


//Calculate function 

const calculate = (operand1, operator, operand2) => {
    let Value1 = parseFloat(operand1);
    let Value2 = parseFloat(operand2);

    if (operator === 'add') {return Value1 + Value2};
    if (operator === 'subtract') {return Value1 - Value2};
    if (operator === 'multiply') {return Value1 * Value2};
    if (operator === 'divide') {return Value1 / Value2};
}

// Percentage calculate function 

const calculatePercentage = (firstValue, displayedValue) => {
    return +(firstValue / 100 * displayedValue).toFixed(10);
};

keys.addEventListener ('click', e => {
    if (e.target.matches('button')) {
        const key             = e.target;
        const action          = key.dataset.action;
        const keyValue        = key.textContent;
        const displayedValue  = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(operators)
        .forEach(k => k.classList.remove('calculator-operatorKey--isPressed'));

        //This block of code is executed when clicked button with a number

        if (!action) {
            if (displayedValue === '0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = keyValue;
            } else if (previousKeyType === 'percentage') {
                subDisplay.textContent = subDisplayContent ;
                display.textContent = keyValue;
            } else {
                display.textContent = displayedValue + keyValue;
            };

            calculator.dataset.previousKeyType = 'number';
        };

        //This block of code is executed when clicked button with an operator

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
           
            const firstValue = calculator.dataset.firstValue;
            const secondValue = displayedValue;
            const operator = calculator.dataset.operator;

            if (firstValue && 
                operator &&
                previousKeyType !== 'operator' && 
                previousKeyType !== 'calculate'
            ) {
                const result = calculate(firstValue, operator, secondValue);
                display.textContent = +result.toFixed(10);   

                calculator.dataset.firstValue = result;
            } else {
                calculator.dataset.firstValue = displayedValue;
                
            }
            subDisplay.textContent += ' ' + displayedValue + ' ' + keyValue;
            key.classList.add('calculator-operatorKey--isPressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;  
        }

        //This block of code is executed when clicked button with a decimal

        if (action === 'decimal') {  
            if (!displayedValue.includes('.') && previousKeyType === 'number') {
                display.textContent = displayedValue + ',';
            } 
            if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0,';
            }

            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action !== 'clear') {
            clearButton.textContent = 'CE'
        }
        
        //This block of code is executed when clicked clear button

        if (action === 'clear') {
            if(key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.carriedSecondValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
                subDisplay.textContent = '';
            }
            display.textContent = '0';
            key.textContent = 'AC'
            calculator.dataset.previousKeyType = 'clear';
        }
         
        //This block of code is executed when clicked equal button

        if (action === 'calculate') {
            var firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            var secondValue = displayedValue;

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedValue;
                    secondValue = calculator.dataset.carriedSecondValue;
                }

                display.textContent = +calculate(firstValue, operator, secondValue).toFixed(10);
            };
            calculator.dataset.carriedSecondValue = secondValue;
            subDisplay.textContent = '';                                      
            calculator.dataset.previousKeyType = 'calculate';
        }

        //This block of code is executed when clicked percentage button

        if (action === 'percentage') {  
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = calculatePercentage(firstValue, displayedValue);
            
            if(previousKeyType === 'operator' || previousKeyType === 'number') {
                subDisplayContent = subDisplay.textContent;
                display.textContent = secondValue;
                subDisplay.textContent += ' ' + secondValue;
            } else if (previousKeyType === 'percentage') {
                display.textContent = secondValue;
                subDisplay.textContent = subDisplayContent + ' ' + secondValue;
            } else if (previousKeyType === 'calculate') {
                calculator.dataset.firstValue = displayedValue;
                subDisplay.textContent  = calculatePercentage(displayedValue, displayedValue);
                display.textContent  = calculatePercentage(displayedValue, displayedValue);     
            } else {
                display.textContent = '0';
                subDisplay.textContent = '0';
            }

            calculator.dataset.previousKeyType = 'percentage';    
        }
    }
});

// Mode switch section

var modeSwitcher = document.querySelector('.header-modeSwitcherFrame');
var mode ='day';

modeSwitcher.addEventListener ('click', () => {
    var button = document.querySelector('.header-modeSwitcherButton');
        if (mode === 'day') {
            var animation = button.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(26px)'}
            ],100);

            animation.addEventListener('finish', () => {
                button.style.transform = 'translateX(26px)';
            });

            document.body.style.setProperty('--calculator-bg-color', '#000000');
            document.body.style.setProperty('--main-text-color', '#ffffff');
            document.body.style.setProperty('background-color', '#737373');
            document.body.style.setProperty('--operatorButton-bg-color', '#e6e6e6');
            document.body.style.setProperty('--equalButton-bg-color', '#ff6600');
            document.body.style.setProperty('--logo-color', '#ffffff');
            document.body.style.setProperty('--modeSwitcher-bg-color', '#ff6600');
            document.querySelector('.calculator-extendedKeys').style.setProperty('display', 'none');
            
            mode = 'night'
        } else {
            animation = button.animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

                animation.addEventListener('finish', () => {
                    button.style.transform = 'translateX(0)';
                });

                document.body.style.setProperty('--calculator-bg-color', '#ffffff');
                document.body.style.setProperty('--main-text-color', '#000000');
                document.body.style.setProperty('background-color', '#ffffff');
                document.body.style.setProperty('--operatorButton-bg-color', '#e6f2ff');
                document.body.style.setProperty('--equalButton-bg-color', '#e6f2ff');
                document.body.style.setProperty('--logo-color', '#000000');
                document.body.style.setProperty('--modeSwitcher-bg-color', '#737373');
                document.querySelector('.calculator-extendedKeys').style.setProperty('display', 'block');
                mode = 'day'    
        }


    
});