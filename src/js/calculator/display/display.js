'use strict';

class Display {
    constructor (id) {
        this.display    = id.querySelector('.calculator-display');
        this.subDisplay = id.querySelector('.calculator-subDisplay');
    };

    updateDisplay ({mainDisplay, secondDisplay}) {
        if (mainDisplay === 0) this.display.textContent = '0';
        if (mainDisplay) this.display.textContent = mainDisplay;
        if (secondDisplay) this.subDisplay.textContent = secondDisplay;
    };

    watchFontSize () {
        if (this.display.textContent.length < 14) {
            this.display.style.setProperty('font-size', '30px')
        };

        if (this.display.textContent.length > 14) {
            this.display.style.setProperty('font-size', '20px')
        };

         if (this.display.textContent.length > 22) {
            this.display.style.setProperty('font-size', '10px')
        };

        if (this.subDisplay.textContent.length < 30) {
            this.subDisplay.style.setProperty('font-size', '15px')
        } else if (this.subDisplay.textContent.length > 30 && subDisplay.textContent.length < 60) {
            this.subDisplay.style.setProperty('font-size', '10px')
        } else {
            this.subDisplay.style.setProperty('font-size', '8px')
        };
    }
};

export default Display;