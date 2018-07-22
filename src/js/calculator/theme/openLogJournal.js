'use strict';

function openLogJournal (id) {
    let logJournalOpenButton = id.querySelector('.calculator-logJournalOpenButton');
    let state = 'closed';
    
logJournalSwitcher.addEventListener ('click', () => {
    let logJournalButton = id.querySelector('.calculator-logJournalSwitcherButton');
    let logJournal = id.querySelector('.calculator-logJournal');
        if (state === 'closed') {
            var logJournalAnimation = logJournalButton.animate([
                {transform: 'translateX(0)'},
                {transform: 'translateX(18px)'}
            ],100);

            logJournalAnimation.addEventListener('finish', () => {
                logJournalButton.style.transform = 'translateX(18px)';
            });

            logJournal.classList.add('calculator-logJournal--opened');
            
            state = 'opened'
        } else {
            logJournalAnimation = logJournalButton.animate([
                {transform: 'translateX(26px)'},
                {transform: 'translateX(0)'}
            ],100);

            logJournalAnimation.addEventListener('finish', () => {
                logJournalButton.style.transform = 'translateX(0)';
            });

            logJournal.classList.remove('calculator-logJournal--opened');  

            state = 'closed'    
        };
    });
};

export default openLogJournal;