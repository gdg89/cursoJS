//Void significa que uma função ou metodo não retorna nada.

function semRetorno(...args: string[]): void {
  console.log(args.join('#/'));
}

const pessoa = {
  nome: 'Mirna',
  sobrenome: 'Perex',

  whriteName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Milonga', 'Pancadas', '32');
pessoa.whriteName();

export { pessoa };
