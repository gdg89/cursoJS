const formEvent = document.querySelector('form');

formEvent.addEventListener('submit', function (e){
    e.preventDefault();
    let inputName = e.target.querySelector('#name');
    let inputAge = e.target.querySelector('#age');
    let inputGender = e.target.querySelector('#gender');
   

    const name = inputName.value;
    const age = Number(inputAge.value);
    const gender = inputGender.value;
    
  
    
  // if(name == '' || age == ''){
    //     message();
    //     return;
    // }
  // setTableData(name, age, gender); 

    // troquei o if pelo ternario.
    const ternario = (name == '' || age == '' )? message() : setTableData(name, age, gender);

    inputName.value = '';
    inputAge.value = '';
});

function setTableData(name,age,gender){
    const tbody = document.querySelector('tbody');
    const tableTr = document.createElement('tr');
    const tableTdName = document.createElement('td');
    tableTdName.innerHTML = name;
    const tableTdAge = document.createElement('td');
    tableTdAge.innerHTML = age;
    const tableTdGender = document.createElement('td');
    tableTdGender.innerHTML = gender;

    
    // if(gender === 'Feminino'){
    //     tableTr.classList.add('feminino');
    // }else if(gender === 'Masculino'){
    //     tableTr.classList.add('masculino');
    // }

    //troquei if pelo corto circuito
    const feminino = gender == 'Feminino' && tableTr.classList.add('feminino');
    const masculino = gender == 'Masculino' && tableTr.classList.add('masculino');

    tableTr.appendChild(tableTdName);
    tableTr.appendChild(tableTdAge);
    tableTr.appendChild(tableTdGender);
    tbody.appendChild(tableTr);

}


function message(){
    const message1 = document.querySelector('.message');
    const p = document.createElement('p');
    p.innerHTML = 'Deve completar todos os campos';
    message1.classList.add('message1');
    message1.appendChild(p);
   
    

}

