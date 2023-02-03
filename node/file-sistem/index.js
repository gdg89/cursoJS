//file sistem
const fs = require('fs').promises;
//path
const path =require('path');

//função que reseve o caminho da pasta e escanea ela com readdir.
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);   
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

//percorre o arquivo listando as pastas dele
async function walk(files, rootDir){
    for(let file of files){
        //cria caminho com rootDir mais nome do arquivo(file).
        const fileFullPath = path.resolve(rootDir, file);

        //captura o status do arquivo
        const stats = await fs.stat(fileFullPath);

        //removendo pastas que não quero ver
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        //confere se o arquivo é um diretorio e lista os arquivos nele
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        //achando arquivos css
        if(!/\.css$/g.test(fileFullPath)) continue;
        
        //loga o arquivo e confere se é um diretorio
        console.log(file, stats.isDirectory());
    }
}

readdir('c:/Users/giuil/OneDrive/Documentos/dev');