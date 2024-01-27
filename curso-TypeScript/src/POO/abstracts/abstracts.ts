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

//A class abstract Perssonagem so pode ser extendida e não instanciada diretamente!
export abstract class Perssonagem {
  protected abstract emoji: string;

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
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida ...`,
    );
  }

  //toda classe extendida de Personagem precisa ter um  metodo bordão.
  abstract bordao(): void;
}

export class Guerreira extends Perssonagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'Alalaaaaaaaa!!!');
  }
}

export class Mostro extends Perssonagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'Grrrrrrrrr!!!');
  }
}

const guerreira = new Guerreira('Shina', 100, 1000);
const mostro = new Mostro('Kita', 87, 1000);

guerreira.atacar(mostro);
guerreira.atacar(mostro);
guerreira.atacar(mostro);
mostro.atacar(guerreira);
guerreira.atacar(mostro);
mostro.atacar(guerreira);
mostro.atacar(guerreira);
