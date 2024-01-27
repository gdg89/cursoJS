/**
 * A associação em JavaScript refere-se à forma como objetos
 * interagem. Pode ser alcançada por composição, onde um objeto
 * contém outros; agregação, onde objetos independentes são
 * referenciados; associação por referência, usando propriedades
 * de referência; e associação dinâmica, permitindo a
 * manipulação em tempo de execução. Essas abordagens oferecem
 * flexibilidade para modelar relacionamentos entre objetos.
 *
 */

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Fiódor Dostoiévski');
const caneta = new Caneta('Fulgor Nocturnus');
const maquinaEscrever = new MaquinaEscrever('Remington No.1');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;
escritor.escrever();
