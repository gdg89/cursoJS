//Decorator de propiedades.

function decorator(classProtoype: any, propertyName: string | symbol): any {
  let propetyValue: any;
  console.log(classProtoype);
  console.log(propertyName);
  return {
    get: () => propetyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propetyValue = value.split('').reverse().join('');
        return;
      }
      propetyValue = value;
    },
  };
}

export class UmaPessoa {
  @decorator
  nome: string;
  @decorator
  sobrenome: string;
  @decorator
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  method(msg: string): string {
    return `${this.nome} ${this.sobrenome} says: ${msg}`;
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
