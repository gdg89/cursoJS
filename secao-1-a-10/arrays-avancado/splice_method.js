/**
 *  O metodo splice() altera o conteudo de uma lista, adicionando
 *  novos elementos enquanto para remover elementos antigos.
 *  Retorna um array.
 */
//               0         1        2         3          4
const nomes = ['Maria', 'Julio', 'Eduardo', 'Sofia', 'Claudia'];

//nomes.splace(indice, delete, add: elem1, elem2, elem3)

/**DELETANDO */
//pop
//remove um elemento do indice 4 ('Claudia')
//nomes.splice(4, 1);//retorna o array sem o elemento removido.

// para retornar o elemento removido adiciono ele numa variavel.
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

//pasando numero negativo no indice começa a contar do final do array.

const negativo = nomes.splice(-1, 1);//remove o ultimo elemento do array.
console.log(negativo);

/*
cuando não conheco o tamanho do array e quero eliminar desde um indice ate o final posso pasar Number.MAX_VALUE.
Asimm ele vai eliminar desde o indice pasado até o final.

*/
const ateFinal = nomes.splice(1, Number.MAX_VALUE);
console.log(nomes, ateFinal);

/**ADICIONANDO */
const nomes2 = ['Maria', 'Julio', 'Eduardo', 'Sofia', 'Claudia'];

//a partir do indice 3 nao elimina nenhum item e adiciona dois nomes
nomes2.splice(3, 0, 'Giuliano', 'Graziela');
console.log(nomes2);

//adicionando no final
nomes2.splice(nomes2.length, 0, 'Cristina', 'Mercurio');

//adicionando no inicio
nomes2.splice(0, 0, 'Stuart', 'Magnolia');

// SUBSTITUINDO

//a partir do indice 2, elimina um item e adiciona um novo nome.
nomes2.splice(2, 1, 'Anastassia');
console.log(nomes2);

