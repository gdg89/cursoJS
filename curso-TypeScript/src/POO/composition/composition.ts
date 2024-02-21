/**
 * COMPOSITION:
 * A composição refere-se à prática de criar objetos complexos
 * combinando ou agregando outros objetos mais simples. Em vez
 * de depender da herança de classes (como na programação
 * orientada a objetos tradicional), a composição permite que um
 * objeto contenha instâncias de outros objetos para alcançar a
 * funcionalidade desejada.
 *
 * Permitindo uma maior flexibilidade e reutilização de código
 * em comparação com a herança tradicional. Essa abordagem
 * promove um design mais modular e menos acoplado.
 *
 */

export class Carro {
  //relação de composição com o objeto motor
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parado...');
  }

  desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();
carro.acelerar();
