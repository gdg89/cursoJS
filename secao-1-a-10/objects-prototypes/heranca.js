//Hernça em Prototipos

// Exepmlo criar sistema para dono de ecomerce. Q vende camiseta e caneca.


//camiseta = cor, caneca = material
//ambos teram opção de aumento e desconto

//Criando abstação Produto
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//Adicionando metodos no prototype da função Produto
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

//Para não ter que reescrever o codigo anterior para cada produto vou criar um funcao contrutora.

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const camiseta = new Camiseta('Regata', 10, 'Orange');
console.log(camiseta);
/**
 Ao tentar pasar um desconto pra nova camiseta vai dar erro,
 porque cada função tem sua propiedade prototype, e nesse caso ainda nao defini o desconto na função camiseta. 
 */
//console.log(camiseta.desconto(5));//retornara um TypeError

//Linkando o prototype de camiseta, com o prototype de produto.
Camiseta.prototype = Object.create(Produto.prototype);
//Reatribuindo constructor real de camiseta
Camiseta.prototype.constructor = Camiseta;

const camiseta2 = new Camiseta('Regata2', 50, 'Blanco');
//testando novamente metodo de desconto em nova camiseta..
camiseta2.desconto(5);
console.log(camiseta2);

//sobreescrevendo aumento
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
camiseta2.aumento(10);//aumento de 10%
console.log(camiseta2);


//Criando Caneca.
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor != 'number')return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constuctor = Caneca;

const caneca = new Caneca('Taza', 140, 'porcelana', 720);
caneca.desconto(20);
console.log(caneca);