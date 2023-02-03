// fetch('pessoas.json')
//   .then(response => response.json())
//   .then(json => carregaElementoNaPagina(json));

// TROCANDO O FETCH PELO Axios

axios('pessoas.json')
  .then(resposta => carregaElementoNaPagina(resposta.data));

function carregaElementoNaPagina(json) {
  const table = document.createElement('table');
  const tr1 = document.createElement('tr');
  
  let th = document.createElement('th');
  th.innerHTML = "Nome";
  tr1.appendChild(th);

  th = document.createElement('th');
  th.innerHTML = "Idade";
  tr1.appendChild(th);

  th = document.createElement('th');
  th.innerHTML = "Salario";
  tr1.appendChild(th);
 

  table.appendChild(tr1);

  for (let pessoa of json) {

    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}