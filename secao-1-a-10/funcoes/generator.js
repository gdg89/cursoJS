/**
 * Generators são funções cuja execução pode ser interrompida e 
 * posteriormente reconduzida. 
 * Seus contextos (de associações de variáveis)
 * ficarão salvos entre cada recondução.
 * 
 * SINTAXE: function*
 * 
 * - yield : A palavra-chave yield pausa a execução de uma
 * generator function e o valor da expressão em frente a 
 * palavra-chave yield é retornado para a chamada do generator.
 * 
 * - next():método retorna um objeto com duas propriedades
 *  value e done. Você também pode fornecer um parâmetro
 *  para o método next para enviar um valor para o gerador. 
 * 
 *      - true: se o gerador passar do fim de seu fluxo de
 *      controle. Neste caso especifica o valor de devolução
 *      do gerador (que pode ser indefinido).value
 *
 *      - false: se o gerador for capaz de produzir mais
 *      valores. 
 *
 */

function* geradora1(){
    //aqui algum codigo...
    yield 'valor 1';
    //aqui algum codigo...
    yield 'valor 2';
    //aqui algum codigo...
    yield 'valor 3';
}

const g1 = geradora1();
// console.log(g1.next().value);// valor1
// console.log(g1.next().value);// valor2
// console.log(g1.next().value);// valor3
// console.log(g1.next());// value undefined, done true

// iterando gnerator
console.log('iterando gerador');

for (let valor of g1){
    console.log(valor);
}

//contador infinito
console.log('contador infinito')

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);// ele vai atender todas as chamadas ja que ta num loop infinito.
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


//gerador que delega taefas pra outro gerador
console.log('gerador que delega taefas pra outro gerador');

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log('com funções');

function* geradora5(){
    yield function(){
        console.log('vim do y1');
    }
    //...
    yield function(){
        console.log('vim do y2'); 

    }

}

const g5 = geradora5();
 func1 =g5.next().value;
 func2 = g5.next().value;

 func1();
 func2();
