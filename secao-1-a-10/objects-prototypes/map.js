/** Estrutura de dados MAP  
 * O objetoMapcontém pares chave-valor e lembra a inserção original ordem das chaves.
 * Qualquer valor (objetos evalores primitivos) pode ser usado como uma chave ou um valor.
 * 
 * Mapos objetos são coleções de pares chave-valor.
 *  Uma chave no Map pode ocorrer apenas uma vez ; 
 * é único na Mapcoleção do. Um Mapobjeto é iterado 
 * por pares chave-valor — um for...ofloop retorna
 *  uma matriz de 2 membros [key, value]para cada iteração.
 *  A iteração acontece na ordem de inserção , 
 * que corresponde à ordem em que cada par chave-valo
 * r foi inserido pela primeira vez no mapa pelo set()método 
 * (ou seja, não havia uma chave com o mesmo valor já no mapa
 *  quando set()foi chamado).
 * 
*/

/*Supondo que tem uma estrutura de dados recibidos de uma API, e preciso  pegar o id e colocar ela como chave do objeto novasPessoas, */
const pessoas = [
    { id: 3, nome: 'Flavia' },
    { id: 2, nome: 'Merlin' },
    { id: 1, nome: 'Erimeon' }
];

// Recuperando id de cada objeto de pessoas, e pasando como chave, para cada novo objeto de novasPessoas.

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     //aplicando via destructuring
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};

// }
// console.log(novasPessoas);
/*
    Temos duas situações para observar no codigo acima:
    - As chaves de um objeto so podem ser string ou symbol,
      e nesse caso o id que era Number pasou a ser string.
      Isso pode ser resolvido reconvirtiendo para number caso seja necesario.
      
    - A segunda situação é que a ordem dos objetos foi
      modificada,
      já que quando numeros são utilizados como chaves,
      serão ordenados de forma crecente.
*/


/**
 * Para resolver todas essas questiçoes
 * vamos utilizar o Map.
 * 
 * -preciso iterar o objeto.
 * -preciso talvez eliminar algum elemento
 * -e preciso da chave sendo number.
 */


const novasPessoas = new Map();
for (const pessoa of pessoas) {

    const { id } = pessoa;
    //Criando o valor com set(), o primeiro parametro vais ser a chave(pode ser qualquer tipo de dado.), e o segundo será o valor
    novasPessoas.set(id, { ...pessoa });

}
// Obtendo o valor do Map com  get1();
console.log(novasPessoas.get(2));


//ITERANDO SOBRE O MAP, retorna um array


//pegando via destructuring o identificador e o objeto.
for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}


/*
    Outro jeito de pegar valores do MAP,seria pegando o objeto mesmo (pessoa), ao inves de usar destructuring,
    isso é recomendado quando tem muitos dados
*/


/* pegando as chaves */
for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}

/* pegando valores */
for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}

/*Eliminando chave 2  */
novasPessoas.delete(2);
console.log(novasPessoas);