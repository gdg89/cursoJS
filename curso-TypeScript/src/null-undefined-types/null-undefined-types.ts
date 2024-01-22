//null é usado quando um valor intencionalmente não está presente
// undefined é frequentemente usado como o valor padrão quando uma variável não foi inicializada

//Undefined
let x;
if (typeof x === 'undefined') x = 20; // fica atribuido o tipo number no lugar de undefined.
console.log(x * 2);

//let z;
//console.log(z * 2); // da erro pos z é undefined.

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//Null

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

//const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

if (squareOfString === null) {
  // ao realizar checagem js sabe que pode ser number ou null.
  console.log('conta invalida');
} else {
  console.log(squareOfString * 100); // aqui ja sabe que so póde ser do tipo number.
}
