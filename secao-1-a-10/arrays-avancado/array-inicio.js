
/**
 * podemos declarar um array utilizando o construtor, ele funciona do mesmo jeito.
 * ex: const nomes = new Array('Giuliano', 'Analia', 'Marcos', 'Graziela');
 */


/*
Usamo delete quando queremos 
eliminar o valor , mas não o indice.
*/

const nomes = ['Giuliano','Graziela', 'Analia', 'Marcos'];
nomes[2]= 'Epiteto';//mudando o valor do indice 2.
console.log(nomes[2]);
delete nomes[2];// eliminando o valor do indice 2, retornaraum empty item.

console.log(nomes);


console.log('######## VALORES POR REFERENCIA ##########');
//valores por referencia
const novo = nomes;//todo que fizer nomes reflete em novo, e viceverza.

console.log('Novo', novo);
console.log('Nomes', nomes);

novo.pop();//elimina um item (Marcos)
console.log('eliminou um item de novo', novo);
console.log('e tambem de nomes', nomes);


console.log('######## COPIANDO COM SPREAD ##########');
//copiando com spread ...
const animais = ['perro', 'gato', 'jirafa', 'murcielago'];
const animais2 = [...animais];// agora o que eu faço em animais2, não reflete em animas.
console.log('Animais:', animais);
console.log('Animais 2:', animais2);

animais.pop();//elimina um item de animais.
console.log('Aniamais elimina um item:', animais);
console.log('isso não afeta animais2:', animais2);


console.log('#### FATIANDO ARRAY COM SLICE #####');

const animal = animais.slice(1, 3);//pega do indice 1 ao indice 2, ja que o ultimo indice(3) nao e exibido.

console.log(animal);

const animales = animais.slice(0, -2);//pega do indice 0, ate menos os dois ultimos itens.


console.log('##### CONVERTENDO STRING EM ARRAY');
const nome = 'giuilliano Daniel Garcia';
const separaNome = nome.split(' ');// split recupera em um array separando a string pelo caracter especificado, em esse caso um espaço.

console.log(separaNome);

console.log('##### CONVIRTIENDO ARRAY PARA STRING');
const uneNomes = separaNome.join(' ');//join convierte um array em uma string, separando os valores pelo caracter especificado, em este caos um espaço.
console.log(uneNomes);


