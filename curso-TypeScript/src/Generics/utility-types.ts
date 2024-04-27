/**
 * Generics que o TS ofrece prontos(os principais, tem mais na documentação.)
 */

/**
 * Record:
 * Record é um tipo genérico que permite criar um tipo de objeto com chaves e valores específicos. Ele é útil quando você deseja definir um tipo de objeto com um conjunto fixo de chaves, mas não sabe os tipos dos valores associados a essas chaves.
 */
const object1: Record<string, string | number> = {
  name: 'Euclides',
  lastname: 'Smith',
  age: 72,
};
console.log(object1);

//Required
/**
 * Required<T> é uma utilidade que transforma um tipo em que 
 * todas as propriedades são opcionais em um tipo onde todas as 
 * propriedades são obrigatórias. Em outras palavras, 
 * Required<T> faz com que todas as propriedades de um tipo T se 
 * tornem necessárias, removendo a opção de serem opcionais.


 */
type PessoaProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// aqui as chaves passam de ser opcional a serem Required.
type PessoaRequired = Required<PessoaProtocol>;
const object2: PessoaRequired = {
  name: 'Euclides',
  lastname: 'Smith',
  age: 72,
};
console.log(object2);

//Partial
/**
 * o Partial<T> é uma utilidade que transforma um tipo em que
 * todas as propriedades são obrigatórias em um tipo onde todas
 * as propriedades são opcionais
 *
 */
type PessoaPartial = Partial<PessoaRequired>;
const object3: PessoaPartial = {
  name: 'Euclides',
  lastname: 'Smith',
  age: 72,
};
console.log(object3);

//ReadOnly
/**
 * Só leitura.
 */
type PessoaReadonly = Readonly<PessoaRequired>;
const object4: PessoaReadonly = {
  name: 'Euclides',
  lastname: 'Smith',
  age: 56,
};
console.log(object4);

//Pick
/**
 * Permite escolher os elementos od objeto que vc quer utilizar.
 */
type PessoaPick = Pick<PessoaRequired, 'name' | 'lastname'>;

const object5: PessoaPick = {
  name: 'Euclides',
  lastname: 'Smith',
};
console.log(object5);

//Extract e Exclude
/**
 * exclude e extract são duas utilidades que podem ser usadas em
 *  conjunção com tipos de união (union types) para filtrar ou
 * extrair determinados tipos de uma união.
 *
 * Exclude :
 * A utilidade Exclude<T, U> cria um novo tipo que inclui apenas
 * os tipos de T que não são atribuíveis a U. Em outras
 * palavras, ela remove os tipos que estão presentes tanto em T
 * quanto em U.
 *
 * Extract:
 * A utilidade Extract<T, U> cria um novo tipo que inclui apenas
 *  os tipos de T que são atribuíveis a U. Em outras palavras,
 * ela extrai os tipos que estão presentes tanto em T quanto em
 * U.
 */
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; //Computa os tipos de ABC que não pode ser atribuios a CDE.("A" e "B").
type TipoExtract = Extract<ABC, CDE>; //Computa unicmente os tipos de ABC que podem ser atribuios a CDE.("C").

//Exepmplo de Usos
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

//usando o pick vou pegar as chaves nome e idade do Accountmongo, e vou adicionar um novo chave id no lugar do _id.
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'odfsj4$##fr43f33fffH$¨M#',
  nome: 'Climber',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...acountData } = accountMongo;
  return { ...acountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
//Module node
export default 1;
