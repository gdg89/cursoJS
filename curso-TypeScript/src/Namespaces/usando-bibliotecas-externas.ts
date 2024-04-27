/**
 * Ao utilizar bibliotecaa de terceiros para JS em TS precisamos
 * instalar en algunos casos a tipagem.
 * exemplo:
 * npm i validator
 * npm i @types/validator --save-dev
 */

import validator from 'validator';
import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

global.MYGLOBAL = 'AMASTODONT';

console.log(validator.isEmail('milonga@email.com'));
console.log(_.clone([1, 2, 3, 4, 5, 6, 7]));

export default _;
