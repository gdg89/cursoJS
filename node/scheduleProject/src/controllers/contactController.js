const { async } = require('regenerator-runtime');
const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    res.render('newContact');
}

exports.schedule = (req, res) => {
    res.render('schedule');
}


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

        req.flash('success', 'Contato cadastrado com sucesso');
        req.session.save(function () {
            return res.redirect(`/contact/edit/${contact.contact._id}`);
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404');
    const contact = new Contact(req.params.id);

    const contactSelected = await contact.searchContactId(req.params.id);
    if (!contactSelected) return res.render('404');

    res.render('contactEdit', { contactSelected });
}

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
        req.flash('success', 'Contato editado com sucesso');
        req.session.save(function() {
            return res.redirect(`/contact/edit/${contact.contact._id}`);
        });
        return;
    }catch (e) {
        console.log(e);
        return res.render('404');
    }
    
}