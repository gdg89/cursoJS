/**
 * O método forEach() executa uma função
 * dada em cada elemento de um array.
 * 
 * Parâmetros
    callback
    Função para executar em cada elemento, recebendo três argumentos:

    currentValue
    O valor atual do elemento sendo processado no array.

    index Optional
    O índice do elemento atual sendo processado no array.

    array Optional
    O array que forEach() está sendo aplicado.
 */

const a1 = [11, 265, 39, 47, 55, 689, 750, 88, 972];
let total = 0;

a1.forEach(function(valor, indice, array){
    //console.log(valor, indice, array);
});

a1.forEach(valor =>{
    total += valor;
});
console.log(total);

