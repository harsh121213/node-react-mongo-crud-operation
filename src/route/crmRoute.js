import { addNewContact ,
        getContact,
        getById,
        updatecontact,
        deletecontact
} from '../controllers/crmController';



const route = (app) => {

    app.route('/contact')

    .get(getContact)
     .post(addNewContact);

    app.route('/contact/:contactid')
        .get(getById)
        .put(updatecontact)
        .delete(deletecontact);
        

}

export default route;