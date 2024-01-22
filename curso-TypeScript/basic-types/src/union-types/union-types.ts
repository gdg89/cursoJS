/*
Em TypeScript, um union type (tipo união) é uma maneira de 
declarar que um valor pode ter um de vários tipos possíveis. 
Usa-se o operador de barra vertical (|) para combinar diferentes 
tipos em uma única declaração. 
*/

// exemplo
function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b; // checamos se os parametros são number para realizar a suma
  return `${a}${b}`; // caso contrario realizamos a concatenação!
}

console.log(addOrConcat(10, 20)); // suma
console.log(addOrConcat('10', '20')); //  concatena
console.log(addOrConcat(10, '20')); //  concatena
console.log(addOrConcat('10', 20)); //  concatena
