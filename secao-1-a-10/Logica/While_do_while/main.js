/**
 * While e do while são estruturas de repetição
 *  ha diferencia do for, com o while normalmente não sabemos o tamanho do elemento que
 *  estamos trabalhando.
 */

function random(min, max){
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}
const max = 50;
const min = 1;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min, max);
   console.log(rand);
   
}
console.log('#########################');
// do while executa pelo meno uma vez o codigo.

do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);