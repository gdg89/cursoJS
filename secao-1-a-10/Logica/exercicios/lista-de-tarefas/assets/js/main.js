const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

// capturando click no botão add tarefa e tratando caso o input não tenha nenhum valor.
btnTarefa.addEventListener('click',
    function () {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

// capturando evento de tecla precionada,(tratando o enter).
inputTarefa.addEventListener('keypress', function (e) {
    //si tecla pressionada foi codigo 13 (enter).
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }

});

//limpando input e dando foco pra adicionar nova tarefa.
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

//cria tarefa e imprime na lista.
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    getButtonDelete(li);
    salvarTarefas();

}

function getButtonDelete(li){
    li.innerText += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Apagar';
    btnDelete.setAttribute('class', 'apagar');
    li.appendChild(btnDelete);
}


// Apagando item da lista.
document.addEventListener('click', function(e){
    // capturando elemento que envia o evento.
    const elemento = e.target;

    //condicinal para conferir si apagar foi clicado.
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

//SALVANDO TAREFA
function salvarTarefas(){
    //recuperando valor dos li da ul.
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;//recuperando textos das li.
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();// eliminando palavra apagar do botão. Eliminando espaços nos esxtrremos da String com trim();
        listaDeTarefas.push(tarefaTexto);// adicionando cada tarefa num array.
    }

    //convirtiendo o array num JSON e guardando no local Storage.
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);//salvando no local storage com nome tarefas, usado para recuperar depois.(so pode guardar strings, por isso foi convertido num JSON).
}

// REcuperando tarefas salvas no navegador(local storage) e reconvertendo em array.
function adicionaTarefasSalvas(){

    //recuperando tarefas.
    const tarefas = localStorage.getItem('tarefas');

    //convirtiendo em array.
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    //Imprimiendo lista.
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
