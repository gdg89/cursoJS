//O decorador de parametros so funciona para assistir o que tem no parametro.

function decorator(
  classPrototype: any,
  methodName: string | symbol | undefined,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
  return 'Something';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorator nome: string,
    @decorator sobrenome: string,
    @decorator idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  method(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const user = new UmaPessoa('Aldnae', 'Mirkov', 56);
//user.method = () => 'HaHaAHahahaAHA';
const message = user.method('Hi everyone!');
console.log(message);
console.log(`${user.nomeCompleto} says : ${message}`);
