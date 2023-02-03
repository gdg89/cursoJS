/**
 * O NodeList se comporta de maneira muito similar a um array.
 * Pelo que é posivel iterarlo da mesma manera que um array.
 */

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//pegando estilos computados do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody);

//pasando cor do background do body para o background do paragrafo, e pasando color blanco para texto do paragrafo.
for(let p of ps){
    p.style.background = backgroundColorBody;
    p.style.color = 'white';
}