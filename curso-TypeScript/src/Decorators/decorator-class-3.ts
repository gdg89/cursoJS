//Pasando Parametros nos decorators.

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

//para pasar parametros preciso embrulhar o decorator numa função que recebera esses parametros.
function invertNomeECor(param1: string, param2: string) {
  //retornando o decorator
  return function <T extends new (...args: any[]) => any>(target: T) {
    console.log('Sou o Decorator e resebi', target);
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

export const animal = new Animal('Roxo', 'Capivara');
console.log(animal);
