/**
 * - Primitivos (imutáveis) : string, number, boolean, undefined,
 *                null( bigint , symbol). - Valores copiados
 * 
 * - Referência (mutável): array, object, function. - Pasados por referencia.
 */

// Um dado imutavel não pode ser modificado.
//          01234567
let nome = 'Giuliano';
nome[0] = 'R';// o indice 0 da string não sera modoficado para R.
console.log(nome[0], nome);

// Valores primitivos são copiados
let a = 'A';
let b = a; //Cópia
console.log(a, b);
// em dados imutaveis, cuando modifico a, b mantem o valor inicial, ja que foi gerada uma copia.
a = 'Outra coisa';
console.log(a, b);


//Em dados Mutaveis, y muda o valor, ja que ele faz uma referencia ao local na memoria.

let x = [1, 2,3];
let y = x;// y aponta por referencia ao mesmo valor na memoria.
let z = [...y];//Spread...realiza uma copia dos valores d y, e nao sera afetado pelas modificações de x.
console.log( x, y);

x.push(4);
console.log(x, y, z);//se muda x, tambem muda y. Mas z mantem o valor inicial de y.

y.push('Giuliano');
console.log(x, y, z);//se y muda o valor, z ainda mantem o valor inicial, ja que ele gerou uma cópia.

// funciona do mesmo jeito com objetos.
const alunoA = {
    nome:'Camila',
    sobrenome: 'Molina'
}
const alunoB = alunoA;
console.log(alunoA, alunoB);

const alunoC = {...alunoB};//Spread...gera uma copia.


alunoA.nome = 'Evelyn';
console.log(alunoA, alunoB, alunoC);//alunoC não muda.


