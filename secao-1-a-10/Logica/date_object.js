/**
 * é uma construct function 
 * se declara com a palavra new
 * funções construtoras começam com maiuscula
 * as datas sao formadas por milisegundos a partir do ano 1970
 */
let data = new Date();// cuando llamar a função Date sem parametro, JS cria om objeto com a data atual.
console.log(data.toString());

//Data inicial, Tamestamps unix
data = new Date(0);//01/01/1970 Tamestamp unix ou epoca unix
console.log(data.toString());

//Sumando tres horas na data inicial.
const tresHoras = 60 * 60 * 3 * 1000;//60s *60m * 3 da 3hs, com en js são milisegundo multiplicamos por 1000.
data = new Date(0 + tresHoras);
console.log(data.toString());

//adicionando um dia
const umDia = 60 * 60 * 24 * 1000;
data = new Date(0 + umDia);
console.log(data.toString());

// pegando a data  8 de abril de 1989 22:15:45 hs
// deven ser pasado pelo menos dois parametros, ano e mes pra js nao considerar como milisegundos.
data = new Date(1989, 3, 8, 22, 15, 45);// meses sao contados do 0 - 11, sendo 0 janeiro 11 dezembro.
console.log(data.toString());

//pasando data como string.
data = new Date('2021-10-12 20:20:59');
console.log(data.toString());
// pegando ano mes dia etc

console.log('Ano', data.getFullYear());
console.log('Mes', data.getMonth() + 1)//Mes começa do zero;
console.log('Dia', data.getDate());// retorna dia no mes 1 ao 31
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('milisegundos', data.getMilliseconds());
console.log('Dia Semana', data.getDay());// 0 -domingo, 6 sabado.

//obtendo os milisegundo da data inicial ate hoje;
data = Date.now();
console.log(data);

//adicionando zero a esquerda em numeros menores que 10
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

// formatando data
function formataData(date) {
    const ano = zeroAEsquerda(date.getFullYear());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const dia = zeroAEsquerda(date.getDate());
    const hora = zeroAEsquerda(date.getHours());
    const minutos = zeroAEsquerda(date.getMinutes());
    const segundos = zeroAEsquerda(date.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}
const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);
