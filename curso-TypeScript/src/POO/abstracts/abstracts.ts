/**
 * ABSTRACT:
 * A palavra-chave abstract em JavaScript é usada para definir
 * classes ou métodos abstratos. Uma classe abstrata não pode
 * ser instanciada diretamente e geralmente serve como uma
 * classe base para outras classes. Métodos abstratos são
 * declarados sem implementação e devem ser definidos nas
 * classes derivadas. Contudo, o suporte para abstract pode
 * variar entre ambientes JavaScript, e em alguns casos, pode
 * ser necessário recorrer a ferramentas como TypeScript para
 * obter funcionalidades completas de orientação a objetos com
 * classes abstratas.
 *
 */

export class Perssonagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(presonagem: Perssonagem): void {
    this.bordao();
    presonagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida ...`);
  }

  bordao(): void {
    console.log('BORDAO');
  }
}

export class Guerreira extends Perssonagem {}
export class Mostro extends Perssonagem {}

const guerreira = new Guerreira('Shina', 100, 1000);
const mostro = new Mostro('Kita', 87, 1000);

guerreira.atacar(mostro);
guerreira.atacar(mostro);
guerreira.atacar(mostro);
mostro.atacar(guerreira);
guerreira.atacar(mostro);
mostro.atacar(guerreira);
mostro.atacar(guerreira);
