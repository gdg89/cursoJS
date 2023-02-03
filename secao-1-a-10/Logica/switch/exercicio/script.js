// const text = document.querySelector('.container h1');
// const data = new Date();

// function showDate(data) {
//     const dia = data.getDay();
//     let diaSemanaTexto;

//     switch (dia) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'Dia invalido';
//     }
// }

// function getNomeMes(numeroMes) {
//     const mes = numeroMes.getMonth();
//     let mesTexto;

//     switch (mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             return mesTexto;
//         case 1:
//             mesTexto = 'Fevereiro';
//             return mesTexto;
//         case 2:
//             dmesTexto = 'Março';
//             return mesTexto;
//         case 3:
//             mesTexto = 'Abril';
//             return mesTexto;
//         case 4:
//             mesTexto = 'Maio';
//             return mesTexto;
//         case 5:
//             mesTexto = 'Junho';
//             return mesTexto;
//         case 6:
//             mesTexto = 'Julho';
//             return mesTexto;
//         case 7:
//             mesTexto = 'Agosto';
//             return mesTexto;
//         case 8:
//             mesTexto = 'Setembro';
//             return mesTexto;
//         case 9:
//             mesTexto = 'Otubro';
//             return mesTexto;
//         case 10:
//             mesTexto = 'Novembro';
//             return mesTexto;
//         case 11:
//             mesTexto = 'Dezembro';
//             return mesTexto;
//         default:
//             mesTexto = 'Dia invalido';
//     }
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function formataHora(date) {
//     const hora = zeroAEsquerda(date.getHours());
//     const minutos = zeroAEsquerda(date.getMinutes());
//     const segundos = zeroAEsquerda(date.getSeconds());

//     return `${hora}:${minutos}:${segundos}`;
// }


// text.innerHTML = `${showDate(data)} ${data.getDate()} de ${getNomeMes(data)} do ${data.getFullYear()} , ${formataHora(data)} `;


//METODO CERTO DE  OBTER O MESMO RESULTADO!(ver documentação date)

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});


