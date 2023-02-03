const request = obj => {
   return new Promise((resolve, reject) => {
        //xhr é um nome padrão que representa XMLHttpRequest(ajax)
        const xhr = new XMLHttpRequest();
        //pasamos o verbo http, a URL, e se é sincrono(false) ou asincrono(true).
        xhr.open(obj.method, obj.url, true);
        xhr.send();



        //checando quando a requisição foi carregada
        xhr.addEventListener('load', () => {
            //verificando codigo de resposta http
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }

        });
    });

}

//recuperando todos os clicks no documento
document.addEventListener('click', evento => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    //checando se o elemento clicado e da tag a(link).
    if (tag === 'a') {
        evento.preventDefault();
        carregaPagina(elemento);
    }
});


//função que carrega a pagina
async function carregaPagina(elemento) {
    //pegando atributo href do elemento
    const href = elemento.getAttribute('href');

    //carregando a pagina via ajax
    const objConfig = {
        method: 'GET',
        url: href,
    };

    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }
    catch(e){
        console.log(e);
    }
    
    
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
