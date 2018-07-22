'use strict';

import createData        from './core/createData';
import Display           from './display/display';  
import Menu              from './menu/menu';  
import LogJournal        from './log-journal/log-journal';  
import switchTheme       from '../calculator/theme/switchTheme';

class Calculator  {
    constructor(id) {
        this.id             = document.querySelector(`${id} .calculator`);
        this.keys           = this.id.querySelector('.calculator-keys');
        this.burger         = this.id.querySelector('.calculator-burger');
        this.modeSwitcher   = this.id.querySelector('.calculator-modeSwitcherFrame');
        this.logOpenButton  = this.id.querySelector('.calculator-logOpenButton');
        this.logClearButton = this.id.querySelector('.calculator-logClearButton');
        this.display        = new Display (this.id);
        this.menu           = new Menu (this.id);
        this.logJournal     = new LogJournal (this.id)
    };

    init() {    
        this.keys.addEventListener('click', e => {
        //Set listener when any calculator key is pushed    
            if (e.target.matches('button')) {
                const key         = e.target;
                const displayData = createData(this.id, key)

                this.display.updateDisplay (displayData);
                this.display.watchFontSize();
            };
        });

        this.burger.addEventListener('click', this.menu.openMenu.bind(this.menu));
        this.modeSwitcher.addEventListener('click', this.menu.switchMode.bind(this.menu));
        this.logOpenButton.addEventListener('click', this.logJournal.openLogJournal.bind(this.logJournal));
        this.logClearButton.addEventListener('click', this.logJournal.clearLogJournal.bind(this.logJournal));
        switchTheme ();
    };
};

export default Calculator;

