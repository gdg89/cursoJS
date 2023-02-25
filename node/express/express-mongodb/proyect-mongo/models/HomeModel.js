const mongoose = require('mongoose');

//modelagem de dados pasando um objeto con os dados que eu quero
const HomeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: Number
});

// Criando model pasando como parametros nome e sechema.
const HomeModel = mongoose.model('Home', HomeSchema);

//sera importado no homeController
module.exports = HomeModel;