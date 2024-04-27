/**
 * Um type predicate é uma função que retorna um tipo booleano e
 * é usada para verificar se uma variável tem um tipo
 * específico. A função pode ter qualquer nome, mas comumente é
 * prefixada com "is" seguido pelo nome do tipo. Por exemplo,
 * uma função para verificar se uma variável é um number pode
 *  ser chamada de isNumber.
 *
 */

//função predicate
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber(1235));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 2));
console.log(soma(...[1, 2, 2, 2, 1]));
console.log(soma('1', '2', '2'));
