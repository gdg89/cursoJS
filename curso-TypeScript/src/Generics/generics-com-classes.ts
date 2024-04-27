export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

//mostrando como o tipo é inferido automaticamente quando pasamos os atributos.
const pessoa1 = new Pessoa('Gin', 35);
const pessoa2 = new Pessoa(['Mero'], '30');
const pessoa3 = new Pessoa(['Mark'], { idade: 30 });
const pessoa4 = new Pessoa<string, number>('Houston', 25);

console.log(
  'Tipos inferidos automaticamente: \n',
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4,
);

//Mostrando casos donde não pode ser inferido os tipos.
//Nesse caso usando a estrutura de dados STACK
export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  size(): number {
    return this.contador;
  }

  showStack(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}

//Aqui TS não consegue inferir o tipo, precisamos declararlo manualmente.
const pilha = new Stack<number | string>(); //infeinr tipo manualmente :  new Stack<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push('4');

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
