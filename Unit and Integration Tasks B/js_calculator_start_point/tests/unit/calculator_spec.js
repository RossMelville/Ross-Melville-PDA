var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('can click number 5', function(){
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5);
  }),

  it('can click +', function(){
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+')
  }),

  it('can concatinate 1 and 2 and 3 to make 123', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123)
  }),

  it('can add 1 and 4 to get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 5);
  }),

  it('can multiply 3 and 5 to get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  }),

  it('can divide 21 by 7 and get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3)
  }),

  it('subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3)
  }),

  it('can clear running total to 0', function(){
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  }),

  it('can add 2 and 3 then multiply by 5 to get 25', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 25);
  })





});
