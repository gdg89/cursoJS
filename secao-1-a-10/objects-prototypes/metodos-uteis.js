/**
 Object.values
 Object.entries
 Object.assign(des, any)
 Object.getOwnPropertyDescriptor(o, 'prop')
 ...(spread)

//ja vimos
Object.keys (retorna o nome das chaves)
Object.freeze (consgela o objeto)
Object.defineProperties (define varias propiedades)
Object.definePreperty (define uma propiedade)

 */

//Utilizando ...spread para copiar um objeto!
//************************************************ */
const produto = {nome: 'Caneca', preco: 3.50};
//const produto2 = produto // atribuindo desssa manera os dois bjetos apontam pro mesmo lugar na memoria, se modificar um vai modificar o outro.

const produto2 = {
    ...produto,
    material: 'polietileo',//tambem é posivel agregar nova chave.
};//dessa manera gera uma copia,apontando a lugares diferentes na memoria, e um não sofrera as modificções do outro.

produto2.preco = 35;
//console.log(produto);
//console.log(produto2);

//Utilizando Object.assign() copia todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto alvo.
//************************************************ */
const novoProduto = Object.assign({}, produto,{material: 'Ceramica'});
novoProduto.nome = 'Prato';
//console.log(novoProduto);

//Utilizando Object.getOwnPropertyDescriptor (object, 'property') retorna as propiedades do objto(writable, cofigurable, enumerable,value)
//************************************************ */
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
    //modificando a property
Object.defineProperty(produto,'nome',{
    writable:false,
    configurable:false,
    enumerable:false,
    value:'Telgopor'
});
console.log('Propiedade Modificada');
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);//nao exibe nome por ter enumerable :false.


//Utilizando Object.values(), retorna um array com os valores de las propiedades enumerables  de um objeto.
//*************************************************** */
console.log(Object.values(novoProduto));

//Utilizando Object.entries(), retorna um array, com um array com o nome e valor por cada chave enumerabel do objeto.
/**************************************************** */
console.log(Object.entries(novoProduto));

//Iterando com for of
for(let [chave, valor] of Object.entries(novoProduto)){
    if(chave === 'preco'){
        console.log(`${chave}: $${valor}`)
    }else{
        console.log(`${chave}: $${valor}`);
    }
}
