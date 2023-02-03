/***
 * Concatenando arrays
 */

//utilizando mtodo concat()
const a1 =[1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Giuliano');//retorna um array com so valores pasado e separado por virgulas.
console.log(a3);

//utilizando o spread operator ...
const a4 = [...a1, ...a2, 'Giuliano', ...[7, 8, 9]];
console.log(a4);
for (let i in a4){
    console.log(i, a4[i]);
}
