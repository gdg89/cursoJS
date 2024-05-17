//Adicionando um segundo Decorator. E criei uma interface para tipar o target dos decorator

interface Constructor {
  new (...args: any[]): any;
}

@segundoDecorator('Second Decorator Param')
@invertNomeECor('valor1', 'valor2')
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {
    //exibindo a classe
    console.log('Sou a classe');
  }
}

function invertNomeECor(param1: string, param2: string) {
  //retornando o decorator
  return function (target: Constructor) {
    console.log('Sou o Decorator e recebi', target);
    //retornando a classe do decorator
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.invert(args[0]); //arg[0] representa o primeiro argumento da classe Animal.
        this.nome = this.invert(args[1]);
      }

      //utilizando os parametros recebidos
      invert(value: string): string {
        return value.split('').reverse().join('') + param1 + ' ' + param2;
      }
    };
  };
}

function segundoDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o segundo Decorator' + param1);
    return target;
  };
}

export const animal = new Animal('Roxo', 'Capivara');
console.log(animal);
