/**
 * FILTER
 * ********
 *  -O metodo filter cria um novo array com todos os que passaram
 *  no teste implementado pela funcao fornecida.
 *  -Nao modifica o array original.
 *  - Filter requer que a function callback retorne um boolean,
 *    true para embutir no novo array,
 *    e false pra nao embutir.
 * 
 * exemplo:
 * ********
 * 
 * function isBigEnough(value){
    return value >= 10;
   }

    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtrado é [12, 130, 44]

 **************************************************
 ***************************************************   
 */


// Retorne os numeros maiores que 10
const  numbers =[5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

//function callback para passar no filter,
// tambem é possivel pasarla diretamente como parametro.
        /*
        function callBackFIlter(value){
            return value > 10;
        }
        */
//                              arrow function
const filtered = numbers.filter(valor => valor > 10);//so retornando a condição ele vai retornar true ou false, não é nefcesario fazer um if.
console.log(filtered);







//Retorne as pessoas que tem o nome com 5 letras ou mais.
//Retorne as pessoas com mais de 50 anos.
//Retorne as pessoas cujo nome termina com a.
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoasComNomeGrande);

const pessoasMaiorDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaiorDe50);

const nomeTerminacomA = pessoas.filter(obj => {
   return obj.nome.toLocaleLowerCase().endsWith('a');
});

console.log(nomeTerminacomA);