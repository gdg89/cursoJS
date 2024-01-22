/**
 * public:

  O modificador public é o modificador padrão para membros de uma 
  classe em TypeScript. Se um membro de uma classe é marcado como 
  public, isso significa que ele pode ser acessado de qualquer 
  lugar, tanto dentro da classe quanto fora dela.

* private: 

  O modificador private restringe o acesso ao membro apenas à 
  própria classe onde foi declarado. Isso significa que outros 
  códigos, mesmo fora da classe, não podem acessar diretamente 
  esse membro.
  
 */

/* eslint-disable prettier/prettier */

//VERSÃO LONGA
export class Empresa {
  //public é o estado padrão dos atriutos, pelo que não é necesario escreber a palabra public.
  public readonly nome: string;
  //classes são aceitas como types
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionColaborador(colaborador:Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  showColaborador(): void {
    for (const colaborador of this.colaboradores){
      console.log(colaborador);
    }
  }
}

//VERSÃO CURTA
export class Colaborador{
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}

}

const empresa1 = new Empresa('minharaça', '12.345.678/0001-90');
const colaborador1 = new Colaborador('Graziela', 'Barreto');
const colaborador2 = new Colaborador('ELineusa', 'Barreto');
const colaborador3 = new Colaborador('Giuliano', 'Garcia');

empresa1.adicionColaborador(colaborador1);
empresa1.adicionColaborador(colaborador2);
empresa1.adicionColaborador(colaborador3);

console.log(empresa1);
empresa1.showColaborador();
