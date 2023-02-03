const path = require('path');
// caminho do novo arquivo
const filePath = path.resolve(__dirname, 'teste.json');

const write = require('./modules/write');
const read = require('./modules/read');

// const pessoas = [
//     {nome:'Alex'},
//     {nome:'Nibia'},
//     {nome:'Morgan'},
//     {nome:'Gretchel'},
//     {nome:'Monic'},
//     {nome:'Anselmo'},
// ]

//converte objteo pessoas em json
// const json = JSON.stringify(pessoas,'', 2);

//write(filePath, json);

async function readFile(caminho){
    const data = await read(caminho);
    renderData(data);
}

const renderData = (data)=>{
    //convertendo json para objeto.
    data = JSON.parse(data);
    data.forEach( val => console.log(val.nome));
}

readFile(filePath);