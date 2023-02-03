/**
 * - Ao pasar argumentos sem ter  clarado parametro, js
 * nao da erro, simplemente ejecuta sin los argumentos.
 * los argumentos pasados quedarna almacenados en una 
 * variable llamada arguments.
 * 
 * -Arguments retorna um objeto contendo os argumentos pasados.
 * 
 * -Solo funciona con funciones declaradas con la palavra function.
 */

function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//aõ pasa so um parametro, be ficaria como undefined
//e posibel atribuir um valor padron caso nao seja pasaado nenhum argumento. ex: b = 2;
function soma(a, b = 2){
    console.log(a + b);
}
soma(2,);

// Pasando um objteo como parametro, e atribuindo via desestruturação.
function pessoa ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
const obj = {nome: 'Giuliano', sobrenome: 'García', idade: 33};
pessoa(obj);

//pasando Array como parametro e atrbuindo via desestruturação.
function valores([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
const array = [123, 156, 895];
valores(array);


// aplicando rest - sempre debe ser o ultimo parametro.

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
     if(operador === '+') acumulador += numero; 
     if(operador === '-') acumulador -= numero;  
     if(operador === '*') acumulador *= numero;  
     if(operador === '/') acumulador /= numero;       
    }
    console.log(acumulador);
}
conta('+', 0, 231, 126, 1565, 684);
