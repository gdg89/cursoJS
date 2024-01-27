/**
 * AGREGAÇÃO:
 * agregação refere-se à criação de objetos compostos, nos quais
 * um objeto contém outro objeto como parte de sua estrutura.
 * Isso é diferente da herança, onde um objeto herda
 * propriedades e métodos de outro. Na agregação, um objeto é
 * composto por outros objetos, mas eles podem existir
 * independentemente.
 *
 */

// no seguitne exempolo o carrinho pode garegar produtos.

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }

  get allProdutos(): Produto[] {
    return this.produtos;
  }
}

export class Produto {
  constructor(
    private _nome: string,
    public preco: number,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(_nome: string) {
    this._nome = _nome;
  }
}

const produto1 = new Produto('Camiseta', 46.85);
const produto2 = new Produto('Mochila', 26.85);
const produto3 = new Produto('Calça', 56.85);
const produto4 = new Produto('Cueca', 120.85);

//console.log(produto1.nome);
//produto1.nome = 'Pasei pelo set'; // Caso no tiver o set não poderia adicionar um novo nome já que o atributo _nome é privado.
//console.log(produto1.nome);

console.log('####### Carrinho ##########');

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);
console.log(carrinhoDeCompras.allProdutos);
console.log(
  'Quantidade total de produtos : ' + carrinhoDeCompras.quantidadeProdutos(),
);
console.log('Valor total da compra : ' + carrinhoDeCompras.valorTotal());
