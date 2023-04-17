const mongoose =require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    phone: { type:String, required: true },
    email: { type:String, required: true },
    create: { type: Date, default: Date.now }
});


const ContactModel = mongoose.model('contact', ContactSchema);

class Contact {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contact = null;
    }


    //Search contact by id
    async searchContactId(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findById(id);
        return contact;
    }
    
    
    //Create new contact in the DB
    async addContact(){
        this.valida();
        if (this.errors.length > 0 ) return;
        await this.contactExist();
        if (this.errors.length > 0) return;
        //create new contact and attribute it to this.contact
        this.contact = await ContactModel.create(this.body);

    }

    //Edit contact selected by id
    async contactEdit(id){
        if(typeof id !== 'string') return;
        this.valida();
        if(this.errors.length > 0) return;
        //Search contact by id and modify the data passed in the form
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {new: true});
    }

    //Contact Delete
    async delete(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findByIdAndDelete(id);
        return contact;
    }

    //Takes all the contacts from the DB and orders them by creation date (-1 decreasing - 1  increasing).
    async searchContacts(){
        const contacts = await ContactModel.find().sort({ create: -1 });
        return contacts;
    }
    

    //check if the sent contact already exists
    async contactExist(){
        //procura contato na DB pelo email
        this.contact = await ContactModel.findOne({ email:this.body.email });
        //Se o contato que tenta cadastrar ja existe retorna error
        if(this.contact) this.errors.push('Esse contato já existe');
    }

    //Validate data sent
    valida(){
        this.cleanUp();
        
        if(!this.body.name) this.errors.push('Nome é um campo obligatorio');
        if(!this.body.phone) this.errors.push('Phone é um campo obligatorio');
        if(!this.body.email) this.errors.push('Email é um campo obligatorio');
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');
        

    }

    //Verify that data sent is strings
    cleanUp(){
        for (const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            lastName: this.body.lastName,
            phone: this.body.phone,
            email: this.body.email
        }
    }

}

module.exports = Contact;