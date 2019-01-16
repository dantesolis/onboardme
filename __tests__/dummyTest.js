// [TODO]: Need to add flow

// @flow
import { assert } from 'enzyme';
const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `you are not numbers mister 🍕 😧`
  }

  //  return isNaN(parseFloat(n)) == isNaN(Number(n)) ? n + n  : 'not a number';
}


test('adds 1 + 2 to equal 3', () => {
  expect(add = (a = 1, b = 2) => { a + b }).toBel(3)
  expect(add = (a = 1, b = -2) => { a + b }).toEqual(3)

});

test('it returns an error message when not valid numbers', () => {
  expect(add = (a = null, b = 2) => { a + b }).toBeFalsy();
});  