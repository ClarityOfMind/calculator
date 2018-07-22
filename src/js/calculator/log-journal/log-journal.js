'use stric';

class LogJournal {
    constructor (id) {
        this.logJournal     = id.querySelector('.calculator-logJournal');
        this.logJournalList = id.querySelector('.calculator-logJournalList');
        this.state          = 'closed';
    };

    openLogJournal () {
        if (this.state === 'closed') {
            this.logJournal.classList.add('calculator-logJournal--opened');
            this.state = 'opened';
        } else {
            this.logJournal.classList.remove('calculator-logJournal--opened');
            this.state = 'closed';
        };
    };

    clearLogJournal () {
        this.logJournalList.innerHTML = '';
    };

    static saveLog (id, subDisplay, displayedValue, previousKeyType) {
        let logJournalList = id.querySelector('.calculator-logJournalList');
        let li = document.createElement('li');
        li.classList.add('calculator-log');

        if(previousKeyType === 'scientificOperator' || previousKeyType === 'percentage') {
            li.textContent = subDisplay.textContent
        } else {
            li.textContent = subDisplay.textContent +  displayedValue;
        }

        logJournalList.appendChild(li);
    };
};

export default LogJournal;