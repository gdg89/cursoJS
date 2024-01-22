// como tipar o this
//No TypeScript, você pode tipar o objeto this em uma função usando a sintaxe de função com this explícito.

export function  funcao(this: Date, argumento1: string, argumento2: number): void {
  console.log(this);
  console.log(argumento1, argumento2);
}

/*
Ambos Function.prototype.call() e Function.prototype.apply() são 
métodos em JavaScript que permitem chamar uma função com um 
valor específico para this e argumentos fornecidos de maneiras 
ligeiramente diferentes. 
a principal diferença entre call() e apply() está na forma como os argumentos são passados. call() espera uma lista de argumentos separados, enquanto apply() espera um array de argumentos. Ambos os métodos são utilizados para definir o valor de this para a função durante a chamada.
*/
funcao.call(new Date(), 'Mlonga', 75);
funcao.apply(new Date(), ['Marnes', 98]);