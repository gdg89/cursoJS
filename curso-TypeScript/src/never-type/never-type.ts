// O tipo 'never' representa um valor que nunca ocorre.
// Geralmente usado para indicar funções que lançam exceções
// ou entram em loops infinitos, nunca retornando um valor.

export function criaErro(): never {
  throw new Error('Error qualquer');
}

criaErro();
