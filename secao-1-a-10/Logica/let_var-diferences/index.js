const verdadeira = true;

// // let tem escopo de bloco { ... bloco } nao pode ser redeclarada no mesmo escopo.
// // var só tem esopo de função

// let nome = 'giuliano'; //criando
// var nome2 = 'Giuliano';

// if (verdadeira) {
//     let nome = 'daniel'; //criando
//     var nome2 = 'Mario';//redeclarando

//     if (verdadeira) {
//         let nome = 'Outra coisa';//criando.
//         var nome2 = 'Tebaldo'//redeclarando

//     }
//     /**
//      * O engenie do JS, vai procurar a variael nome desde o escopo mais aninhado, se não achar contianuara procurando nos blocos pais ate chegar no bloco global.
//      */
// }

// console.log(nome, nome2);


// Escopo de função.

// var sobrenome = 'garcía';

// function falaOi() {
//     var nome = 'Giuiliano';//var  nome não pode ser chamado fora da função
    
//     console.log(sobrenome);//As funções podem accesar a variaves no closser, ou seja  declaradas perto delas.

//     // ao contrario de uma variavel let, com var posso acceder desde um bloco enquanto ele esteja dentro da função.
//     if(verdadeira){
//         console.log(nome);
//         let sobrenome2 = 'García';
       
//     }
//     console.log(sobrenome2);//não é possibel accesder a uma variavel let fora do bloco em que foi declarada.//retorna "is not defined".
// }

// falaOi();


