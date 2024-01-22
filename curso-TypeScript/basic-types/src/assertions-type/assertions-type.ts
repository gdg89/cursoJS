/*
Em TypeScript, "type assertions" (afirmações de tipo) são usadas 
para informar ao compilador que você tem conhecimento sobre o 
tipo de uma variável mais do que o TypeScript pode inferir 
automaticamente. Essa é uma maneira de "forçar" um tipo em uma 
determinada variável.
*/
// Todo o seguinte se chama refinamento de tipos!!

//nessa abordagem checamos que body não seja null com uma condicional (cuando não temos certeza que o elemnto existe)
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'blue';

//aqui utilizamo ! ao final pra dizer que não pode ser null,
// ouseja uma non-null assertion.(não recomendado)
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

//aqui usamo um type assertion (quando temos certeza que o elemento existe).
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.focus();
