// 

//SUBSTITUINDO A REQUEST PELO FETCH

/**
 * Fetch retorna por padrão uma promise.
 * Recebe como parametro fetch(resourse, init(optional))
 *  resourse: define o recurso que vc deseja procurar, pode ser uma string ou qualquer objeto com um stringfier, URl. Ou tambem pode receber um objeto Request();
 */


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
    try{
        //pegando atributo href do elemento
    const href = elemento.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error(`A pagina ${href} não existe`);

    const html = await response.text();
    carregaResultado(html);

    }catch(e){
        console.error(e);
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


