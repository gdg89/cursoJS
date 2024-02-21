/**
 * É possivel usar chaves de um type como tipos em outro type.
 * para quando modificar no type original não precisar modificar
 * nos derivados das suas chaves.
 */

type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '1967',
  name: 'Galaxie',
};

console.log(carro);
