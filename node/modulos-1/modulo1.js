// const nome = 'Giuliano';
// const sobrenome = 'Garcia';

// const falaNome = ()=> nome + ' ' + sobrenome;


// Exportando individualmente.
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanome = falanome;
//console.log(module.exports);

// atalho
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);

// eportando uma classe
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;