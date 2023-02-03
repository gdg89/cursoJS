/*
    Defina para variavel A o valor da variavel B, 
    para variavel B o valor da Variavel C, e para variavel C o valor da c=variavel A.
*/

let varA = 'A'; //B
let varB = 'B';//C
let varC = 'C';//A

console.log(varA, varB, varC);

//Solução 1
/*
let varX = '';
varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);
*/

// Solução 2

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);