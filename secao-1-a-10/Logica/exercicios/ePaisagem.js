/**
 * Escreva uma função chamada ePAisagem que
 * recebe dois argumentos, largura e altura de uma imagem(number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

function ePasiagem( l, a ){
   return l > a;
}
console.log(ePasiagem( 156, 75));

//COM ARROW FUNCTION
const ePasiagem2 = ( l, a) => l > a;

console.log(ePasiagem2( 156, 75));