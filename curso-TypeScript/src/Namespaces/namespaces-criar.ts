/**
 * Em TypeScript (TS), um namespace é uma forma de organizar e encapsular código, ajudando a evitar colisões de nomes
 *  entre diferentes partes do código. Ele é semelhante a um módulo, mas tem uma semântica diferente. Um namespace
 * pode conter classes, interfaces, funções e outros namespaces. Ele é útil para criar uma estrutura hierárquica no
 * código e facilitar a reutilização e manutenção. Quando o código é compilado para JavaScript, os namespaces são
 * convertidos em módulos, permitindo uma organização eficiente do código fonte.
 *
 * "SEGUNDO O PROF OS MODULOS DO ECMA JA SÃO UMA BOA OPÇÂO"
 *
 *
 *
 */

// para criar um simplesmente usamos a palavra chave namespace, e ele é executado automaticamente.

/* eslint-disable @typescript-eslint/no-namespace */
namespace Mynamespace {
  const name = 'Giuliano';

  class Person {
    constructor(public name: string) {}
  }

  //utilizo a palavra export para poder usar fora do namespace
  export class Person2 {
    constructor(public name: string) {}
  }

  const person = new Person('Ramhad');
  console.log(person);
  console.log(name);

  //Criando e exportando novo namespace dentro do namespace
  export namespace OtherNamespace {
    export const nameFromOtherNamespace = 'extrange';
  }
}

// aqui não consigo criar Person, por estar fora do namaspace.
// const person2 = new Person('Ramhad');
// console.log(person2);

//aqui utilizo o exportado do namespace
const person3 = new Mynamespace.Person2('Ramhad');
console.log(person3);

console.log(Mynamespace.OtherNamespace.nameFromOtherNamespace);
