/**
 * GETTER - SETTER
 * ******************
 */

//EM FUNCÇÃO CONSTRUTORA
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.ano = ano;

    // criando uma variavel para proteger  a chave principal(modelo).
    let modeloPrivado = modelo;
    Object.defineProperty(this, 'modelo', {
        enumerable: true,
        configurable: true,
        get: function () {
            return modeloPrivado;
        },
        set: function (valor) {
            //tratando erro no if
            if (typeof valor !== 'string') {
                throw new TypeError('Messagem');
            }
            modeloPrivado = valor;//A variavel nao sera alterada se o valor pasado não é valido.
        },
    });
}

const myCar = new Carro('Ford', 'Mustang', 1980);
console.log(myCar);
console.log(Object.keys(myCar));
myCar.modelo = 'novo modelo';
console.log(myCar.modelo);

//EM FUNÇÃO FACTORY
function criaPessoa(nome, idade, sexo) {
    return {
        nome,
        get idade() {
            return idade;
        },
        set idade(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Idade debe ser um numero');
            }
            idade = valor;
        },
        sexo
    }
}

const p1 = criaPessoa('Graziela', 34, 'female');
console.log(p1);
console.log(p1.idade);

