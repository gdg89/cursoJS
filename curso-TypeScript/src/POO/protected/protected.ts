/**
 * PROTECTED: é usada para definir membros de uma classe que são acessíveis apenas por essa classe e suas subclasses.
 */

/* eslint-disable prettier/prettier */

//VERSÃO LONGA
export class Empresa {
  //public é o estado padrão dos atriutos, pelo que não é necesario escreber a palabra public.
  public readonly nome: string;
  //classes são aceitas como types
  protected readonly colaboradores: Colaborador[] = []
  private readonly cnpj: string;

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

export class Minharaça extends Empresa {
  constructor(){
    super('Minharaça', '12.345.678/0001-90');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador;
    return null;
  }
}

//VERSÃO CURTA
export class Colaborador{
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}

}



const empresa1 = new Minharaça();
const colaborador1 = new Colaborador('Graziela', 'Barreto');
const colaborador2 = new Colaborador('ELineusa', 'Barreto');
const colaborador3 = new Colaborador('Giuliano', 'Garcia');

empresa1.adicionColaborador(colaborador1);
empresa1.adicionColaborador(colaborador2);
empresa1.adicionColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
const colaboradorRemovido2 = empresa1.popColaborador();

console.log(colaboradorRemovido);
console.log(colaboradorRemovido2);


console.log(empresa1);

