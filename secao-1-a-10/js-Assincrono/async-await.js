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

            resolve(msg.toUpperCase() + ' - pasei na promise');
        }, tempo);
    });
}

// esperaAi('Fase 1', rand(0, 3))
// .then(fase =>{
//     console.log(fase);
//     return esperaAi('Fase 2', rand(0, 3));
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand(0, 3));
// })
// .then(fase =>{
//     console.log(fase);
//     return fase;
// })
// .then(fase => {
//     console.log('Terminamos na fase: ', fase);
// })
// .catch(e => console.log(e));


/*
    AGORA USANDO ASYNC - AWAIT
*/

async function executa(){
    try {
        const fase1 = await esperaAi('Fase 1', rand(1, 3));
   console.log(fase1);
   const fase2 = await esperaAi(2, rand(1, 3));
   console.log(fase2);
   const fase3 = await esperaAi('Fase 3', rand(1, 3));
   console.log(fase3);
   console.log('Terminamos na fase: ', fase3);
    }catch(e){
        console.log(e);
    }


    //ESTADOS DAS PROMISES
    /**
     * - Pending- Pendiente
     * - fullfield - resolvida
     * - rejected - rejeitada
     */
   
} 

executa();