export class Calculator {
  constructor(public number: number) {}

  //retornando o this retorno a propria instancia, isso me permite faze chamadas em cadeia.
  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

const calculator = new Calculator(10);

//as seguintes chamadas em cadeias são posiveis por ter retornado o this.
calculator.add(5).mul(2).div(3).sub(5);
console.log(calculator);

//Tambem posso extender a classe e o this vai ser do tipo da nova classe.

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const subcalculator = new SubCalculator(3);
subcalculator.pow(3);
console.log(subcalculator);

//Modelo de Projeto BUILD da Gang of four.
/**
 * Usamos o modelo Builder quando precisamos inicializar
 * um objeto que tem um construtor muito grande, permitindo
 * inicializar ele por partes.
 */

export class RequestBuilder {
  private method: 'GET' | 'POST' | null = null;
  private url: string | null = null;

  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // BUILDER
request.setMethod('POST').setUrl('http://minharaça.com').send();
