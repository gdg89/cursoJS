/* unknow type */
/*
o tipo unknown é utilizado para representar um valor cujo tipo
 não é conhecido durante a fase de design ou quando o tipo pode 
 variar dinamicamente. O tipo unknown é mais restritivo do que 
 any porque você não pode realizar operações arbitrárias em 
 valores do tipo unknown sem primeiro realizar uma verificação 
 de tipo ou uma conversão explícita. Isso ajuda a tornar o 
 código mais seguro e a evitar erros relacionados a tipos. Para 
 utilizar um valor do tipo unknown, você precisa verificar e 
 garantir seu tipo antes de realizar operações específicas sobre 
 ele.
 */

//exemplo com any:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let x: any;

x = 100;
x = 'Giuliano';
x = 900;
x = '10';
const y = 800;

console.log(x + y);

// o Unknow a diferença do any exige uma checagem de typo antes de realizar qualquer operação
let r: unknown;

r = 100;
r = 'Giuliano';
r = 900;
r = 10;
const z = 800;

//console.log(r + z); //aqui reclama que o type de r não foi checado

if (typeof r === 'number') console.log(r + z);
