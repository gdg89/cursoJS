/**
 *  - querySelector, é utilizado para selecionar elementos do html.
 *    Seleccionamos os elementos:
 *    pela tag: ex. 'form'
 *    pela class: '.form'
 *    pelo ID: '#form'
 */

function meuEscopo(){
    const form = document.querySelector('.form');//selecionando o form pela class.
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    //para el evento submit.
    function recebeEventoForm(evento){
        evento.preventDefault();//previene comportamento default ao evento submit.o seja naão envia o formulario.
       
        //recuperando los dados de cada elemento html por su classe.
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //atribuindo objeto com os dados pro array pessoas.
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

            //minha solução tinha sido criando um metodo, e logo chamndo ele.
            // resultado(){
            //     document.querySelector('.resultado').innerHTML += `<p>${this.nome} ${this.sobrenome} ${this.peso} ${this.altura}</p>`;
            // }
            
        })
        //solução do prof.
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
