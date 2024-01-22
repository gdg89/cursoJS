export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  //maneira antiga
  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }

  //maneira nova
  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Giuliano', 'Garcia', 30, '123.456.987-00');

pessoa.cpf = '987.654.321-11';
console.log(pessoa.cpf);
