/**
 * O método reduce() executa uma função reducer (fornecida por
 *  você) para cada elemento do array, resultando num único
 *  valor de retorno.
 * 
 * - Normalmente é utilizdo para reducir o array num unico valor.
 * 
 * -Mesmo  ele sendo tão versatil como para realizar as funções
 *  do map e do filter, isso não é recomendavel.
 * 
 * - Se o valor inicial do acumulador não é passado, seu valor
 *  inicial sera o valor do primeiro item. 
 * 
 * 
 */


// Some todos os numeros(reduce)
//Retorne um array com os numeros pares (filter)
//Retorne um arrray com o dobro dos valores(map)
 const  numbers =[5, 50, 80, 1, 2, 3, 5,8, 7, 11, 15, 22, 27];

 //Soma de todos os valores
 const total = numbers.reduce(function(acumulador, valor, indice,array){
    acumulador += valor;// pra cada iteração soma o valor do  elemento ao acumulador.
    return acumulador;
 }, 0);//0 reprecenta o valor inicial do acumulador.
 console.log('Total Suma:',total);
 console.log('####################');

 //Array com os numeros pares
 const pares = numbers.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);//[] representa que el acumulador va a ser un array.

console.log(pares);
console.log('#################');


// Array com dobro dos valores
const dobro = numbers.reduce(function(acumulador, valor){
   acumulador.push(valor * 2);
   return acumulador;
},[]);
console.log('Dobro',dobro);


/**
 * ############################################
 * 
 */
 
console.log('#######################');
console.log('Pessoa Mais Velha');

//Retorne a pessoa mais velha
const pessoas = [
   {nome: 'Luiz', idade: 62},
   {nome: 'Maria', idade: 23},
   {nome: 'Eduardo', idade: 55},
   {nome: 'Leticia', idade: 95},
   {nome: 'Rosana', idade: 32},
   {nome: 'Wallace', idade: 47}
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
   const comparation = acumulador.idade > valor.idade ? acumulador : valor;
   return comparation;
});// como não pasei o valor inicial do acumulador, sera o valor do primeiro elemento, e a cada iteração se realiza a comparação referente a esse valor.

console.log(pessoaMaisVelha);