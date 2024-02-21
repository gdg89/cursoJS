//USANDO HERANÇA
export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}

class Pessoa extends TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {
    super(); //necesita chamar o super para iniciar a classe extendida, nesse caso TIpoPessoa.
  }

  nomeCompleto(): string {
    console.log('### HERANÇA ###');
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lolo', 'Ramirez');
console.log(pessoa.nomeCompleto());

//IMPLEMENTANDO TYPES NA CLASSE

type TypeName = {
  name: string;
};
type TypeLastName = {
  lastname: string;
};
type TypeFullName = {
  fullName(): string;
};

// È possivel implementar varios type numa classe.
class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(
    public name: string,
    public lastname: string,
  ) {}

  fullName(): string {
    console.log('### TYPES ###');
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Mike', 'Gutierrez');
console.log(person.fullName());
