/**
 * o tipo any é usado para representar uma variável que pode conter um valor de qualquer tipo. É uma forma de desabilitar o sistema de verificação de tipos do TypeScript para uma variável específica, o que significa que você pode atribuir a ela valores de qualquer tipo sem obter erros de tipo em tempo de compilação.
 */
// utilizar any apenas em ultimo caso!
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Ola'));
console.log(showMessage(1));
