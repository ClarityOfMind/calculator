'use strict';

function openLogJournal (calculator) {
    let logJournalSwitcher = calculator.querySelector('.calculator-logJournalSwitcherFrame');
    let state = 'closed';
    
logJournalSwitcher.addEventListener ('click', () => {
    let logJournalButton = calculator.querySelector('.calculator-logJournalSwitcherButton');
    let logJournal = calculator.querySelector('.calculator-logJournal');
        if (state === 'closed') {
            var logJournalAnimation = logJournalButton.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(18px)'}
            ],100);

            logJournalAnimation.addEventListener('finish', () => {
                logJournalButton.style.transform = 'translateX(18px)';
            });

            logJournal.style.setProperty('height', '50px');
            
            state = 'opened'
        } else {
            logJournalAnimation = logJournalButton.animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

            logJournalAnimation.addEventListener('finish', () => {
                logJournalButton.style.transform = 'translateX(0)';
            });

            logJournal.style.setProperty('height', '0');  

            state = 'closed'    
        };
    });
};

export default openLogJournal;