/*
Em TypeScript, as funções podem ser tratadas como tipos, o que 
permite uma maior expressividade e segurança de tipo ao 
trabalhar com funções. Existem várias maneiras de definir tipos 
de funções em TypeScript.
*/

//Usando funções como tipo
type MapStrignCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackfn: MapStrignCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
