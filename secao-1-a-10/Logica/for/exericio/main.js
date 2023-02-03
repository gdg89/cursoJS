const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }

];

/**
 * MINHA SOLUÇÃO
 ******************/
// function getElement() {
//     const resultado = document.querySelector('.resultado');
//     for (i = 0; i < elementos.length; i++) {
//         const elemento = document.createElement(elementos[i].tag);
//         elemento.innerHTML = elementos[i].texto;
//         resultado.appendChild(elemento);
//     }
// }

// getElement();


/**
 * SOLUÇÃO DO PROF
 ********************/
const container = document.querySelector('.container')//selecionando container
const div = document.createElement('div');//criando div
div.classList.add('resultado')// adicionando class na div criada.

for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i];//atribução via desestructuração.
    let tagCriada = document.createElement(tag);//criando as tags
    //tagCriada.innherText = texto;//agrega texto
    let textoCriado = document.createTextNode(texto);//cria texto

    tagCriada.appendChild(textoCriado);//agruega texto na tag
    div.appendChild(tagCriada);// agrega tags na div
}

container.appendChild(div);//agrega div no container