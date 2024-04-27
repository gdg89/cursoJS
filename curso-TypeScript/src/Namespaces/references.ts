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
 *  npx tsc references.ts --outfile index.js
 */
