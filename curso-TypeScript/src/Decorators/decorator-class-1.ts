/**
 * Em TypeScript (TS), os decoradores são uma característica que
 * permite adicionar metadados a classes, métodos, propriedades
 * ou parâmetros de uma função. Eles são uma forma de modificar
 * ou anotar o comportamento de uma função ou classe sem
 * modificar diretamente sua implementação. Aqui está um exemplo
 * de como definir um decorador em TypeScript:
 *
 */

@decorator
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {}
}
//O seguinte trecho "new (...args: any[]) => any" está tipando o construtor da classe.
function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.invert(args[0]); //arg[0] representa o primeiro argumento da classe Animal.
      this.nome = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Roxo', 'Capivara');
console.log(animal);
