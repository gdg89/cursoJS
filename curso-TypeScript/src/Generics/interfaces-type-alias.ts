/**
 * PessoaProtocolo é definida como um tipo genérico com dois
 * parâmetros opcionais T e U, com valores padrão de string e
 * number, respectivamente. Isso significa que, se nenhum tipo
 * for especificado ao usar a interface, os tipos padrão serão
 * aplicados.
 *
 *  Isso tambem funciona com Alias Type, mostrado no exemplo de
 *  PessoaProtocolo2.
 */
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

/**
 * Neste caso, T é especificado como string e U como number.
 * Portanto, tanto nome quanto sobrenome devem ser do tipo
 * string, e idade deve ser do tipo number. Isso está em
 * conformidade com a definição da interface, então não há
 * problemas.
 *
 */
const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Milo',
  sobrenome: 'Lunkk',
  idade: 39,
};

//Exemplificando com Alias Type, que vai ser igual em todos os outros casos!
const aluno1A: PessoaProtocolo2<string, number> = {
  nome: 'AMRT',
  sobrenome: 'EM432',
  idade: 7001,
};

/**
 * Aqui, T é especificado como number e U como number. Isso
 * significa que tanto nome quanto sobrenome devem ser do tipo
 * number, e idade também deve ser do tipo number. Apesar de ser
 * incomum usar números para nome e sobrenome, o código ainda
 * funciona porque está em conformidade com a definição da
 * interface.
 *
 */
const aluno2: PessoaProtocolo<number, number> = {
  nome: 3215,
  sobrenome: 956,
  idade: 39,
};

/**
 * Neste caso, nenhum tipo é especificado, portanto, os tipos
 * padrão string para T e number para U serão aplicados. Isso
 * significa que tanto nome quanto sobrenome devem ser do tipo
 * string, e idade deve ser do tipo number. Como os valores
 * fornecidos estão em conformidade com esses tipos, o código
 * funciona sem problemas.
 *
 */
const aluno3: PessoaProtocolo = {
  nome: 'Nero',
  sobrenome: 'Bricj',
  idade: 39,
};

console.log(aluno1);
console.log(aluno1A);
console.log(aluno2);
console.log(aluno3);
