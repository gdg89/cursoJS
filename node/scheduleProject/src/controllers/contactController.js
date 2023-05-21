const Contact = require('../models/ContactModel');


exports.index = (req, res) => {
    res.render('newContact');
}

exports.schedule = async (req, res) => {
    const contact = new Contact(req.body);
    const contacts = await contact.searchContacts();
    //pasa contacts para pegar os valores no view.
    res.render('schedule', { contacts });
}


//Add new contact
exports.newContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.addContact();

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(function () {
                return res.redirect('/contact');
            });
            return;
        }

        req.flash('success', 'Registered contact with success');
        req.session.save(function () {
            return res.redirect('/schedule');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

//Render form to edit contact
exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404');
    const contact = new Contact(req.params.id);

    const contactSelected = await contact.searchContactId(req.params.id);
    if (!contactSelected) return res.render('404');

    res.render('contactEdit', { contactSelected });
}

//Edit Contact
exports.editContact = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');

        const contact = new Contact(req.body); 
        await contact.contactEdit(req.params.id);

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(function () {
                return res.redirect(`back`);
            });
            return;
        }
        req.flash('success', 'Contact edited with success');
        req.session.save(function() {
            return res.redirect('/schedule');
        });
    }catch (e) {
        console.log(e);
        return res.render('404');
    }
}

//Delete Contact
exports.contactDelete = async(req, res) => {
    try{
        if(!req.params.id) return res.render('404');
        const contact = new Contact(req.params.id);
        if(!contact) return res.render('404');
        await contact.delete(req.params.id);

        req.flash('success', 'Contact deleted with success');
        req.session.save(() => res.redirect('/schedule'));
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}