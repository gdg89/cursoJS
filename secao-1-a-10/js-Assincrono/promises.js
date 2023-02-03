function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo){
    //declara uma new promise com uma arrow function pasando dois parametros resolve e reject.
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}


esperaAi('Conexão com o DB', rand(1, 3))
    //then é executado sempre que resolve seja chamado
    .then(resposta =>{
        console.log(resposta + '#');
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta =>{
        console.log(resposta + '$');
        return esperaAi('Pegando dados da DB', rand(1, 3));
    })
    .then( resposta =>{
        console.log(resposta + '%');
    })
    .then(()=>{
        console.log('Exibe os dados na tela');
    })
    //catch é executado sempre que reject seja chamado
    .catch(erro => {
        console.log('ERRO: ', erro);//para gerar um erro posso pasar um valor errado em qualquer then, neese caso quealquer valor que não seja uma string.
    });


    console.log('isso aqui sera exibido antes de qualquer promise');
