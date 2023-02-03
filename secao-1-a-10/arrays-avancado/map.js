/**
 * Map
 * *****
 * 
 * O método map() invoca a função callback passada por argumento
 * para cada elemento do Array e devolve um novo Array como 
 * resultado.
 * 
 * -Retorna um array, e sempre tera o mesmo tamanho do original.
 */

// Dobre os numeros
 const  numbers =[5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

 const doubleNumbers = numbers.map(valor => valor * 2);
console.log(doubleNumbers);


//Para cada elemento:
//Retorne apena uma string com o nome da pessoa.
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto


 const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nome = pessoas.map( objeto => objeto.nome);
console.log(nome);

const removeNameKey = pessoas.map( objeto => {
    delete objeto.nome;
    return objeto;
});//outra opção seria retornar um novo objeto {idade: objeto.idade}
console.log(removeNameKey);


const newId = pessoas.map(function (objeto, index){
    objeto.id = index;
    return objeto;
});
console.log(newId);
/**
 * Podemos observar que o array original foi  modificado,
 * isso porque os objetos são passados por referença, pelo que 
 * eles não são copiados.  
 */
console.log(pessoas);

//solução copiando o obj para que o array original não seja modificado.
const newId2 = pessoas.map(function(objeto, index){
    const newObj = {... objeto};
    newObj.id = index + 10;
    return newObj;
});
console.log(newId2, pessoas);