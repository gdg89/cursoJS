//Super Classe
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  getCpf(): string {
    return this.cpf;
  }
}

//Sub CLasse
export class Aluno extends Pessoa {
  //adicionando novo atributo sala.
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES DE ACESSAR A SUPERCLASSE');
    //a palavra super faz referença a classe pai (Pessoa nesse caso).
    const result = super.getNomeCompleto();
    return `Metodo da super, "${result}"`;
  }
}

//Sub Classe
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Lenny', 'Darlo', 23, '231.468.954-89');
const aluno = new Aluno('Donny', 'Darko', 23, '231.468.954-65', '000001');
const cliente = new Cliente('Marko', 'Fitco', 35, '231.468.954-63');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
