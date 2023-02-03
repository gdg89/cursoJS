const pessoa = {
    nome: 'Anastasia',
    sobrenome: 'Hucktong',
    idade:30,
    endereco: {
        rua:'Calle Paraiso',
        numero: -145
    }
};

//atribução normal
const nome = pessoa.nome;
console.log(pessoa.nome);

//atribução via desestructuração
const {sobrenome, idade} = pessoa;
console.log(sobrenome, idade);

//mudando nome da chave.
const {nome: alguem = '', sobrenome: apellido = ''} = pessoa;
console.log(alguem, apellido);

// pegando o objeto endereco
const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco)

// utilizando operador rest
const {nome:nombre = '', ...resto} = pessoa;
console.log(resto);