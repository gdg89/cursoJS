//Para criar minha propia tipagem global eu utilizo declaration files, com extenção em .d.ts

import _ from './usando-bibliotecas-externas';

const array = [100, 3232, 5656, 8, 84];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
console.log(global.MYGLOBAL);
