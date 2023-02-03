/**
 * && -> false && true -> vai retornar o valor falso "o valor mesmo".
 * || -> true || false -> vai retornar "o valor verdadeiro"
 * 
 * 
 * Avaliação de Corto circuito (Short-Circuit)
 * 
 * Valores que avaliam em falso no JS (falsy values):
 * - false
 * - NaN
 * - 0
 * - "" (string vacia)
 * - null/undefined
 * 
 * Todos os outro valores serão avialados como verdadeiros.
 */
 
// avaliando valores:
console.log( "Giuliano" && "Cravo");// ele vai retornar o ultimo valor verdadero.
console.log("giuliano" && NaN && "Cravo" )// ele vai avialiar só até o valor false(nesse caso NaN), e retornara o mesmo.

//Avalição de corto circuito com && (AND).

function falaOi(){
    return 'Oi';
}
let vaiExecutar = "Giuiliano";// string é avaliado como verdadeiro.

/**
 * Ao invez de faze um if para verificar se a variavel
 * vaiExecutar é verdadeira.
 * 
 * pode fazer o siguinte shotr-circuit:
 */

console.log(vaiExecutar && falaOi());// ele avalia a variavel e se for verdadeira executa a função.

//Avalição de corto circuito com || (OR).

//designando cor de site.
const corUsuario = null;// null é avaliado como false value.
const corPadrao = corUsuario || 'preto';//ele retorna o primero valor verdadeiro.
/*se usuario não escolher cor, 
o proximo valor true seria a string "preto".*/

console.log(corPadrao);

const a = 0;
const b = null;
const c = undefined;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // caso todos o valores são false, retornara o ultimo valor.