/* OBJETO LITERAL
********************* */
const pessoa = {
    nome: 'giuliano', //chaves do objeto
    sobrenome:'gacria',//chaves do objeto
    idade: 36,
};
//accesando a chaves
console.log(pessoa.nome);//opção 1 anotação de ponto
console.log(pessoa['sobrenome']);//opção 2 anotação de corchete( normalmente utilizada para por valores dinamicos, caso o nome da chave não sera determinado até o momento da execução.)
//Exemplo
const chave = 'idade';
console.log(pessoa[chave]);

/*CONSTRUTOR DE OBJETO
************************* */
const pessoa2 = new Object();
pessoa2.nome = 'Armando';
pessoa2.sobrenome = 'Antares';
pessoa2.idade = 52;
pessoa2.falaNome = function(oq){
    console.log(`${this.nome} fala: ` + oq);
}
pessoa2.falaNome('blabala');
console.log(pessoa2.nome);
console.log(pessoa2.idade);

/* APAGANDO CHAVE
 *********************/
delete pessoa.sobrenome;
console.log(pessoa);

/* METODOS
 *****************/
const cachorro = {
    nome:'Cleofido',
    raça: 'Rotweiler',
    idade: 3,
    fala: function(oq){
        console.log(`${this.nome} fala: ` + oq);
    },
    getDataNascimento: function(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};
cachorro.fala('uauuuuu');
console.log(cachorro.getDataNascimento());

/* FOR IN 
***************/
for (let chave in cachorro){
    console.log(chave , cachorro[chave]);
}

/*
 CRIANDO MOLDES PARA OBJETOS (FACTORY FUNCTION/ CONSTRUCTOR FUNCTION)
 ******************************/
// function factory
 function criaFarmacia( nome, endereco, cnpj){
    return {
        nome,
        endereco,
        cnpj,
        get dadosCompletos(){
            return `${this.nome} ${this.endereco} ${this.cnpj}`;
        }
    };
 }
 const farmacia1 = criaFarmacia('Medicci', 'Leandro Gomez 185', 'ND1568B86');
console.log(farmacia1.dadosCompletos);

// function Constructor

function Veterinaria (nome, endereco, cnpj){
    this.nome = nome;
    this.endereco = endereco;
    this.cnpj = cnpj;
    //Object.freeze(this); // Trava todos os objetos criados com esse molde, e não poderam smais ser modificados.
}
/* a palavra new cria um objeto vacio {},
 e pega a palavra this e a relaciona ao novo objeto.*/
const vet1 = new Veterinaria('Fraschinni', 'Independencia 185', 'BT1564D54');
console.log(vet1);

//TRABANDO OBJETO PRA NÃO DSER MODIFICADO.
Object.freeze(vet1);
vet1.endereco = '18 de Julio 562'; // ele não modificara o endereço
farmacia1.endereco = 'Charrua 1229';// ele sim modifica o endereço
console.log(vet1.endereco);
console.log(farmacia1.endereco);

//trabando todos objeto do mesmo construtor.(ver no molde veterinaria, utulizamos Object.freeze(this))
