//importar modulo path do Node para trabalhar com caminos dentro do sistema.
const path = require('path');//Node utiliza o CommonJS como sistema de modulos(diferente do sistema de modulos do ES6).


//Criando exportação do modulo, para que posa ser utilizado fora do arquivo.

//tudo o que tiver nesse eobjeto sera exportado pra fora.
//consfiguração do webpack:
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'source-map'
}
