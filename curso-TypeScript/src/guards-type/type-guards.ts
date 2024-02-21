/**
 * Type guards em TypeScript são mecanismos que permitem
 * verificar o tipo de uma variável em tempo de execução e, com
 * base nessa verificação, realizar operações condicionais com
 * segurança de tipos. Eles ajudam a garantir que o código seja
 * mais robusto e seguro, permitindo que você trate tipos de
 * forma diferente dependendo do contexto. Os type guards podem
 * ser usados com operadores typeof, instanceof, ou com
 * verificações de propriedades específicas, e são comumente
 * usados em situações onde tipos union ou tipos de objeto são
 * usados. Por exemplo, você pode usar type guards para
 * determinar se uma variável é uma string ou um número, ou se
 * um objeto implementa uma determinada interface.
 *
 *
 *   EM RESUMO É REFINAR TIPOS!!
 */

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

//TYPE GUARDS
type Pessoa = { type: 'pessoa'; nome: string };
type Animal = { type: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  readonly type = 'pessoa';
  constructor(public nome: string) {}
}

function showName(obj: PessoaOuAnimal): void {
  //verificando se objeto tem a propiedade nome
  if ('nome' in obj) console.log('Sou o primeiro if', obj.nome);
  if (obj instanceof Aluno) console.log('Sou o segundo if', obj.nome);

  //Outra maneira é colocando chaves com tipos literais e verificar

  switch (obj.type) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log('Isso é um animal ', obj.cor);
      break;
  }
}

showName(new Aluno('Euripides'));
showName({ type: 'animal', cor: 'branco' });
