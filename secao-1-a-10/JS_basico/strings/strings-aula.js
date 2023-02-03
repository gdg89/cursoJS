
let umaString = "Um \"texto\"";
/*
As barras invertidas evitan  o erro 
de  colocar aspas duplas dentro de aspas duplas.
Mas não fica legal nem é recomendavel.
*/

console.log(umaString);

let ddString = "Um \\texto";
/* 
    para colocar uma barra invertida 
    delante de uma palavra, debo colocar duas,
    uma unica barra elimina a letra consecuente.

*/
console.log(ddString);

 /**
  * As Strings são indexadas, isso significa
  * que cada caracter tem um indice, incluindo os espaços.
  * para achar o indice de um carater podemos utilizar os 
  * siguientes metodos:
  */
//                  12345678
 let indexString = "Giuliano Daniel Garcia Developer";
 
 // Vai  exibir o caracter do indice 5,caso se solicite un  indice fuera del rango, retornara undefined.
 console.log(indexString[5]);
 
 //exibe valor do indice 2, caso se solicite un  indice fuera del rango, no sera retornado ningun error.
 console.log(indexString.charAt(2));
 
 //realiza uma concatenação sobre o valor da variavel.
 console.log(indexString.concat(' ','Garcia',' ', 'en', ' un bla bla'));
 
 //Outra manera de concatenar.
 console.log(indexString + ' Garcia, em um lindo dia');
 
 // Concatenando com template String.s
 console.log(`${indexString} García em um lindo dia.`);

 //vai exibir o indice no qual inicia a palavra, caso a palvara nao seja encontrada retornara -1.
 console.log(indexString.indexOf('Developer'));
 
 //vai exibir o indice no qual inicia a palavra a partir del acaracter 5. Caso la palavra no exista va retornar 1.
 console.log(indexString.indexOf('Developer',5));
 
 //Tem  a mesma função que o indexOf, só que contando hacia atras.
 console.log(indexString.lastIndexOf('Developer',5));

 // ESTUDAR expreções regulares e metodos match, search e replace.
 console.log(indexString.match(/[a-z]/g));//retorna un array con todas as letras minusculas.(testar sem flag g).

 console.log(indexString.search(/r/));//Buscara letra r na string e retornara o indice.

 console.log(indexString.replace('Garcia', 'Daniel'));//Va a sustituir Garcia por Daniel.
 console.log(indexString.replace('i', '$'));// Vai substituir a primeira i da string por um $.
 console.log(indexString.replace(/i/g, '$'));// vai substituir todas as i da string.


 //ver tamanho total da string.
 console.log(indexString.length);//vai retornar o total de caracteres incluindo espaços.

 //O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim.
 console.log(indexString.slice(16,23));

 //Vai separa a string por algum caracter de referença
 console.log(indexString.split(' '));// divide pelo espaço e retorna um array.
 console.log(indexString.split(' ', 3));//agora atribuindo um fim, vay retornar só 3 resultados.

 //Todo em mayuscula.
 console.log(indexString.toUpperCase());
 //Todo em minuscula
 console.log(indexString.toLowerCase());