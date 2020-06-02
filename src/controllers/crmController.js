import mongoose from 'mongoose';
import { contactSchema } from '../model/crmModel';
const Contact = mongoose.model('Contact', contactSchema);


export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//getdata


export const getContact = (req, res) => {
    Contact.find({},(err,contact)=>{

        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//get by perticular id


export const getById = (req, res) => {
     Contact.findById(req.params.contactid,(err,contact)=>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

//update

export const updatecontact = (req, res) => {
    Contact.findOneAndUpdate({_id:req.params.contactid},req.body,{new:true,useFindAndModify:false},(err,contact)=>{
       if (err) {
           res.send(err);
       }
       res.json(contact);
   });
};

//delete


export const deletecontact = (req, res) => {
    Contact.remove({_id:req.params.contactid},(err,contact)=>{
       if (err) {
           res.send(err);
       }
       res.send("deleted succesfully");
   });
};