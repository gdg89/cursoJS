//tuple é um array com um número fixo de elementos,
//onde cada elemento pode ter um tipo de dado específico.
//As tuple podem ser inmutaveis usando a palavea "readonly".

//ex:
const dadosCliente: readonly [number, string] = [1, 'Ana'];
const dadosCliente2: [number, string, string] = [1, 'Ana', 'Pernambuco'];
const dadosCliente3: [number, string, string?] = [1, 'Ana']; // ?  = opcional
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Ana',
  'Murcio',
  'Cluster',
  'Someone',
];

//dadosCliente[0] = 100; //erro por tentar modificar um inmutavel
//dadosCliente[1] = '100'; //erro por tentar modificar um inmutavel
console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readOnly Array
const array1: readonly string[] = ['string1', 'string2'];
const array2: ReadonlyArray<number> = [1, 2];

console.log(array1);
console.log(array2);
