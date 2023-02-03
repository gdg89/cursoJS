/**
 * - Funções são declaradas pela palavra function.
 * - Elas executam uma accion.
 * - Elas podem receber parametros dentros dos parentesis.
 * - Cuando chamamos uma função, precisa dos parentesis pra ser executada.
 * - Não é possivel accesar a variaveis declarada dentro da função, desde fora.
 * - Nada do que se declare depois do return será executado.
 */


function saudacao(nome){
    return `Bom dia ${nome}!`;
}

//Chamando e pasando parametros na função.
saudacao('Giuliano');
saudacao('Alexandra');
saudacao('Pedro');

//Salvando  o return numa variavel
const variavel = saudacao('Ser extranho');//ela ta sendo executada alem de pasar o return pra variavel.
console.log(variavel);


//Function soma - caso os parametros não sejam pasados,eles teram valor undefined,e a conta não sera realizada.
function soma(x, y){
    const resultado = x + y;
    return resultado; 
}
console.log(soma(22, 35));

//Tambem é posivel predefinir valores nos parametros, casos não sejam pasados.
function soma2(x = 1, y = 1){
    const resulta2 = x + y;
    return resulta2;
}
console.log(soma2());//caso parametros sejam pasados o valor inicial sera substituido.
console.log(soma2(5));// 5 + y(1) = 6


// Funcões anonimas.

const raiz = function(n){
 return n ** 0.5;
};// cuando a function esta sendo atribuida pelo simbolo = , é necesariofinalizar a xepreção com ;

console.log(raiz(9));// raiz cuadrada de 9
console.log(raiz(5));// raiz cuadrada de 5 
console.log(raiz(19));// raiz cuadrada de 19

//function raiz convertida em  Arrow function 
// const raiz = n => n ** 0.5;

