/**
 * Arrays são uma lista ou colecção de coisas.
 */

// É considerado boa pratica manter os arrays com um unico tipo de dado.
// Os arrays são indexados por elementos, começando pelo indice 0.

// index        0       1          2       3
const alunos = ['Luiz', 'Maria', 'Pedro', 'Giuliano'];

// Ver Tamanho do array.
console.log(alunos.length);//exibe quantidade de elementos.

console.log(alunos);// exibe array completo.
console.log(alunos[0]);//exibe indice 0.
console.log(alunos[3]);//exibe indice 3.

// Modificando valor de um indice.
alunos[2] = 'Anastasia';
console.log(alunos);


//Agregando un nuevo indice
alunos[4] = 'Patricia';//Não é a melhor opção.
console.log(alunos);

// Adicionando elemento no final do array.
alunos.push('Alexadre');
console.log(alunos);

// Adicionando elemento no inicio do array.
alunos.unshift('Evelyn'); // adiciona no inicio do array e modifica os indices de todos os elementos.
console.log(alunos);

//Removendo elemento do finaol do array.
const removidoFinal = alunos.pop(); // é posivel salvar numa variavel o elemento removido.
console.log(removidoFinal);

// Removendo elemento do inicio do array
const removidoInicio = alunos.shift();//é posivel salvar numa variavel o elemento removido.
console.log(removidoInicio);

//Apagando elemento sem alterar o indice.
delete alunos[2];// ao apagar o elemento o indice ficara vacio. Retornando undefined.
console.log(alunos[2]);

// Selecionando una fracção do array
console.log(alunos.slice(0, 3));// da posição 0 ate a 3, ira exibir os 3 primeiros elementos.
console.log(alunos.slice(0, -3))// pegara o tamanho total do array, e restara os ultimos 3 elementos.

//Verificando se o elemento alunos é um array.
console.log(alunos instanceof Array);// Se for retorna true, se não retorna false.

console.log(alunos);