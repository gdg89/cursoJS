/**
 * Funções imediatas ou autoinvocadas:
 * (IIFE - iMMEDIATELY INVOKED FUNCTION EXPRESSION)
 * 
 * -É uma função que é executada assim que definida.
 * -escopo léxico é encapsulado entre parênteses. 
 *  Isso previne o acesso externo às variáveis declaradas na IIFE, 
 *  bem como evita que estas variáveis locais poluam o escopo global.
 */

(function(idade, peso, altura) {
    const nome ='giuiliano';
    const sobrenome = 'garcía';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Fulano'));
    }

    falaNome();
    console.log(idade, peso, altura);

    
})(30, 80, 1.69);

// com arrow function
((valor1, valor2, calculo)=> {
  if(calculo === '+')return console.log('REsultado',valor1 + valor2) ;
  if(calculo === '-')return console.log('Resultado',valor1 - valor2);
})(30, 2,'+');
