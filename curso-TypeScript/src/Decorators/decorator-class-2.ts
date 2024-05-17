//Aqui veremos em qual momento o decorator e chamado.(ele é chamado exatamente na hora da criação da classe,  em que o deorator foi colocado acima.)

@invertNomeECor
export class Animal {
  constructor(
    public cor: string,
    public nome: string,
  ) {
    //exibindo a classe
    console.log('Sou a classe'); // nunca chega a executarse ja que o decorator foi chamado no momento que a classe foi criada.
  }
}

function invertNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o Decorator e resebi', target);
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

// const animal = new Animal('Roxo', 'Capivara');
// console.log(animal);
