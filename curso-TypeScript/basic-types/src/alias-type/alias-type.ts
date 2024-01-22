/*
Em TypeScript, um type alias é uma maneira de criar um nome para 
um tipo existente ou definir um novo tipo. Isso ajuda a tornar o 
código mais legível e a reduzir repetições. Um type alias é 
criado usando a palavra-chave type.
*/

// por convenção tipos criados por nos començam com maiuscula.

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 34,
  nome: 'Giuliano',
  salario: 200_000, // 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Preto'));

const pessoa2: Pessoa = {
  nome: 'Rino',
  idade: 120,
  salario: 50,
};
console.log(setCorPreferida(pessoa2, 'Magenta'));
