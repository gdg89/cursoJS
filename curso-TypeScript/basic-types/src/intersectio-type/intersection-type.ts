/*
Em TypeScript, um intersection type (tipo de interseção) é usado 
para combinar múltiplos tipos em um único tipo que contém todas 
as propriedades de cada tipo original. Isso é feito usando o 
operador &. O tipo resultante representa um conjunto de 
propriedades que estão presentes em todos os tipos intersecados.
*/

//Criando um tipo maior unindo vairas formas

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  nome: 'Arnaldo',
  sobrenome: 'Jus',
  idade: 78,
};

console.log(pessoa);

//utilizando como interceção
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Itersection = AB & AC & AD; // ele pega a inteseção entre os treis tipos, neese caso seria "A".

console.log();

export { pessoa };
