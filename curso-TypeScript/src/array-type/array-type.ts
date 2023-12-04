// tem duas maneira de representar um array
//Array<T> ou T[]

//Array<T>
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

//T[]
export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('Pre', 'ten', 'do');
console.log(result);
console.log(concatenacao);
