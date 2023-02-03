//Declaração de função
/*
Function hoisting: 
eleva as declarações das funções
 e variaveis declaradas com a palavra var,
pro topo do documento js.*/

function falaOi(){
    console.log('Oie');
}

/**
 * First-class object (Objetos de primeria classe):
 * as funções são tratadas como dados.
 * pudiendo almacenarlas em variaveis.
 * (ela passa a ser uma função). 
 * E posso  pasarla como parametro a otra funcion.
 * 
 */

//Function expression.
const souUmDado = function(){
    console.log('sou um dado');
};
souUmDado();

// pasando como parametro.
function executaFuncao(funcao){
    console.log('vou executar sua função abaixo');
}
executaFuncao(souUmDado);


//Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

//dentro de um objeto (a função pode ser um parametro do obj)

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();


