/**
 * Type Script oferece alguns generics prontos,
 * e dois deles são Arrays e Promises.
 */
type myType = number;
//Arrays
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumbers);

//Promises
async function promiseAsync() {
  return 1;
}

//nesse caso ao inves de criar uma async function quero ter mais controle ainda sobre quando resolver minha promise.
function anotherPromise(): Promise<myType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
anotherPromise().then((resultado) => console.log(resultado + 2));
