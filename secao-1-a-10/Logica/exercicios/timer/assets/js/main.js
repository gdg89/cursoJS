function getTimefromSeconds(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString('pt-BR', {
      timeZone: 'UTC'
   });
}
console.log(getTimefromSeconds(0));

// Timer
const relogio = document.querySelector('.relogio');

// Timer controls
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

/******************** */

let segundos = 0;
let timer;


function startClock() {
   timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimefromSeconds(segundos);
   }, 1000);// cada un segundo va adicionar un segundo no relogio.

}

// iniciar.addEventListener('click', function (event) {
//    clearInterval(timer);//garanto não ter dos timer rodando.
//    relogio.classList.remove('pausado');
//    startClock();
// });

// pausar.addEventListener('click', function (event) {
//    clearInterval(timer);
//    if (segundos !== 0) relogio.classList.add('pausado');
// });
// zerar.addEventListener('click', function (event) {
//    clearInterval(timer);
//    segundos = 0;
//    relogio.innerHTML = '00:00:00';
//    relogio.classList.remove('pausado');
// });


/** MANERA MAIS EFETIVA DE FAZER */

document.addEventListener('click', function (e) {
   const el = e.target;// capturando o elemento clicado com target

   // se elemento clicado contem a class x executa o codigo.
   if (el.classList.contains('iniciar')) {
      clearInterval(timer);//garanto não ter dos timer rodando.
      relogio.classList.remove('pausado');
      startClock();
   }
   if (el.classList.contains('pausar')) {
      clearInterval(timer);
      if (segundos !== 0) relogio.classList.add('pausado');
   }
   if (el.classList.contains('zerar')) {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
   }

})