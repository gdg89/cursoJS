/**
 * Return:
 * - Retorna um valor
 * - termina a função
*/

function soma(a, b){
    return a + b;
}


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;//retorna a fucao sem executarla.
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
