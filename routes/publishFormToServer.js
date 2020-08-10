const express = require('express');
const router = express.Router();
const Form = require('../models/FormSchema');
const Field = require('../models/FieldSchema');

const createFields = async (fields) => {
    let fieldIdArray = []
    for (let index = 0; index < fields.length; index++) {
        const fieldData = new Field({
            order: fields[index].id,
            fieldLabel: fields[index].fieldLabel,
            inputName: fields[index].inputName,
            inputType: fields[index].inputType,
        })
        try {
            await fieldData.save();
            fieldIdArray.push(fieldData._id);
        } 
        catch (error) {
            return "Error";
        }
    }
    return fieldIdArray;
}


router.post('/', async (req, res) => {
    const request = req.body
    const name = request.name;
    try {
        const fields = await createFields(request.fields);
        const form = new Form({
            name: name,
            fields: fields,
            answers: [],
        })
        const savedForm = await form.save();
        res.json({ data: "got it!", savedForm: savedForm });
    } 
    catch (error) {
        res.json({ data: error });
        console.log(error)
    }

})


module.exports = router;