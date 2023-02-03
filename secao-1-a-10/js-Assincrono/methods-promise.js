function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Caiu no erro');
                return;
            }
            resolve(msg.toUpperCase() + ' - passei na promise');
            return;
        }, tempo);
    });
}

//Promise.all - Promise.race - Promise.resolve - Promise.reject

const promises = [
    // 'primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    // 'Outro Valor'
];

//Promise.all resolve todas as promise antes de entregar o novo array
// Promise.all(promises)
// .then(valor =>{
//     console.log(valor);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Promise.race entrega o valor da primeira promise resolvida.
// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch((err) => {
//         console.log(err + ' - Tremenda Cagada');
//     });


//Promise.resolve entrega uma promesa ja resolvida
function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    }else{
        return esperaAi("Baixei a pagina", 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));