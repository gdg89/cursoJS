//Anteriormente vimos que para decorar uma classe colocamos el decorado acima da classe, para o metodo a mesma coisa .

function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorator
  method(msg: string): string {
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
