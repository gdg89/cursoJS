const nome = "Giuliano";
const sobrenome = "García";
const idade = 34;

function soma(x, y){
    return x + y;
}

//Caso quera exportar a variavel com outro nome posso fazer :ex( nome as nome2). É sera preciso importar com o novo nome!
export {nome, sobrenome, idade, soma};


//TAMBEM POSSO EXPORTAR ASSIM:
export const nome21 = "Giuliano";
export const sobrenome35 = "García";
export const idade14 = 34;

//Default: o que declare como default, sera exportado por padrão.(so é possivel ter um default por arquivo).
export default function somaDos(x, y){
    return x * y;
}
//COnstantes default devem ser exportadas assim:
// const algo = 'mesa';
// export {algo as default,}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}