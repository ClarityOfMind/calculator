'use strict';

import createData from './core/createData';
import Display from './display/display';  
import Menu from './menu/menu';  
import LogJournal from './log-journal/log-journal';  
import switchTheme from '../calculator/theme/switchTheme';
import WebSocketRequestObject from './server_request/server_request_object';

class Calculator  {
    constructor(id) {
        this.id             = document.querySelector(`${id} .calculator`); //Defines psrticular calculator by selecting via specific ID
        this.keys           = this.id.querySelector('.calculator-keys'); // Selects area containing all calculator's buttons
        this.burger         = this.id.querySelector('.calculator-burger'); //Selects 'burger' icon
        this.modeSwitcher   = this.id.querySelector('.calculator-modeSwitcherFrame'); //Selects switcher button that changes calculator's mode to scientific and backwards
        this.logOpenButton  = this.id.querySelector('.calculator-logOpenButton'); // Selects icon that opens log journal 
        this.logClearButton = this.id.querySelector('.calculator-logClearButton'); // Selets ''trash' button that clers LOg journal
        this.secretButton   = this.id.querySelector('.calculator-secretButton');
        this.display        = new Display (this.id); 
        this.menu           = new Menu (this.id);
        this.logJournal     = new LogJournal (this.id);
        /* this.WebSocket      = new WebSocketRequestObject(this.id) */
    };

    init() { 
        this.keys.addEventListener('click', e => {
        //Hangs event listener if any calculator key is pushed    
            if (e.target.matches('button')) {
                const key         = e.target;
                const displayData = createData(this.id, key)

                this.display.updateDisplay (displayData);
                this.display.watchFontSize();
                
            };
        });

        // Hangs event listeners on all other interacive buttons
        this.burger.addEventListener('click', this.menu.openMenu.bind(this.menu));
        this.modeSwitcher.addEventListener('click', this.menu.switchMode.bind(this.menu));
        this.logOpenButton.addEventListener('click', this.logJournal.openLogJournal.bind(this.logJournal));
        this.logClearButton.addEventListener('click', this.logJournal.clearLogJournal.bind(this.logJournal));
        this.secretButton.addEventListener('click', requestWebsocketServer().then(
            response => console.log(`Fulfilled: ${response}`),
            error => alert(`Rejected: ${error}`))
        );
        switchTheme (); 
    };
};

function requestWebsocketServer () {

    return new Promise (function (resolve, reject) {
        const ws = new WebSocket("ws://localhost:8081");
        ws.send(display.textContent);
        ws.onmessage = function (event) {
            if (event.data === 'Error') {
                reject (new Error ('Request to server has failed'))
            } else {
                resolve ('Data successesfully received')
                display.textContent = event.data; // replaces value dispalyes with a data recived from server
            };
        };
    });
};

export default Calculator;

