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
var Mynamespace;
(function (Mynamespace) {
    var name = 'Giuliano';
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    //utilizo a palavra export para poder usar fora do namespace
    var Person2 = /** @class */ (function () {
        function Person2(name) {
            this.name = name;
        }
        return Person2;
    }());
    Mynamespace.Person2 = Person2;
    var person = new Person('Ramhad');
    console.log(person);
    console.log(name);
    //Criando e exportando novo namespace dentro do namespace
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.nameFromOtherNamespace = 'extrange';
    })(OtherNamespace = Mynamespace.OtherNamespace || (Mynamespace.OtherNamespace = {}));
})(Mynamespace || (Mynamespace = {}));
// aqui não consigo criar Person, por estar fora do namaspace.
// const person2 = new Person('Ramhad');
// console.log(person2);
//aqui utilizo o exportado do namespace
var person3 = new Mynamespace.Person2('Ramhad');
console.log(person3);
console.log(Mynamespace.OtherNamespace.nameFromOtherNamespace);
// Importando um modulo usando o sistema de modulos do TS.
/* eslint-disable @typescript-eslint/triple-slash-reference*/
/// <reference path='namespaces-criar.ts' />
console.log(Mynamespace.OtherNamespace.nameFromOtherNamespace);
/**
 * Pra o sistemas de modulos do TS funcionar preciso cargar
 * novos pacotes (pesquisar). e reconfigurar o "outfile" e o "module" do tsconfig.
 *
 * Outra opção pode ser compilar manualmente indicando o arquivo de saida:
 *
 *  Comando Terminal:
 *  npx tsc src/Namespaces/references.ts --outfile src/Namespaces/index.js
 */
