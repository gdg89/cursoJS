/**
 * STATIC :
 *  um método estático é um método que está associado à própria
 * classe, em vez de ser associado a instâncias específicas
 * dessa classe. Isso significa que você pode chamar um método
 * estático diretamente na classe, sem precisar criar uma
 * instância dela
 *
 */

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrnome: string): Pessoa {
    return new Pessoa(nome, sobrnome, 0, '000.000.000-00');
  }
}

const pessoa1 = new Pessoa('Giuliano', 'Garcia', 30, '123.456.987-00');
const pessoa2 = Pessoa.criaPessoa('Mirko', 'Greno');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
