/*

    As variaveis const, 
    são variaveis constantes, ou seja não mudam seu valor.
    Elas devem ser inicializadas cuando declaradas

*/

//const nome = 'Giuliano';
//nome = 'Magno';//intentar reatribuir un valor a una const, retornara um error.


const primeiroNumero = 5;// valor tipo number.
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero ;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 3;

console.log(resultadoTriplicado);
console.log(typeof resultadoTriplicado);// para ver o tipo do valor utilizamos a function typeof.

/*
 Caso um dos valores seja string e o outro seja number,
 O resultado será um valor string, concatenando ambos os valores.
*/

const numeroString = '123';
const numeroNumber = 20;
const novoResultado = numeroString + numeroNumber;

console.log(novoResultado);
console.log(typeof novoResultado);





