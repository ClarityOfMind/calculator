'use strict';

import Calculator from './calculator/calculator';

const firstCalcilator  = new Calculator('#calc1');
const secondcalculator = new Calculator('#calc2');

firstCalcilator.init();
secondcalculator.init();