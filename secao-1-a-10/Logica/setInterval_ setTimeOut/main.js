// duas funções para controlar timer


function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

    
/* 
- setInterval configura o intervalo 
    de tempo para uma função seja 
    executad num intervalo de tempo.
- no primeiro parametro passa a referença
     da função (sem os ()) a ser executada. 
     Ou se cria uma função anonima
- no segundo parametro passa o tempo
     em milessimos de segundos, 
     de enquanto debe ser executado.
- podemos colar o setInterval numa variavel  para logo parar a execução com o clearinterval.

*/

 const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);// se executa cada 1seg

setTimeout(function(){
    clearInterval(timer);
}, 3000);// para a execuçãon do timer apos 3 seg.

/**
 * setTimeout a diferença do setInterval ele vai 
 *  executar uma unica vez.
 */

setTimeout(function(){
    console.log('Pasaram 5 segundos');
}, 5000);//se executa apos 5seg