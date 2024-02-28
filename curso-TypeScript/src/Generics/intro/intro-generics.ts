/**
 * GENERICS:
 * Em TypeScript, generics são uma ferramenta que permite
 * escrever código que pode trabalhar com uma variedade de
 * tipos, sem especificar explicitamente esses tipos. Em vez
 * disso, os tipos são parametrizados e podem ser fornecidos
 * quando o código é usado. Isso torna o código mais flexível e
 * reutilizável, pois ele pode lidar com diferentes tipos de
 * dados sem a necessidade de escrever implementações
 * específicas para cada tipo. Em resumo, os generics permitem
 * escrever código genérico que pode ser utilizado com
 * diferentes tipos de dados.
 *
 */

//aqui paso que eu quero resever um genreic <U> (para poder tipar os valores), que sera pasado na hora de chamar a função.
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

//usando o generic <T> para  inferir o tipo na função.(T é meramente por convenção, mas pode ir <qualquerCoisa>).
export function myFilter<T>(array: T[], calbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (calbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayMyFilter = myFilter(array, (value) => value < 5);
console.log(arrayMyFilter);
