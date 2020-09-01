const express = require('express');
const router = express.Router();
const Form = require('../models/FormSchema');
const createFields = require('./routeFunctions');
const verify = require('../captchaV2/verification');

router.get('/allForms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    }
    catch (error) {
        console.log(error);
        return res.json({ data: error });
    }
})

router.get('/form/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const form = await Form.findOne({ _id: id }).populate('fields');
        res.json(form);
    }
    catch (error) {
        console.log(error);
        return res.json({ data: error })
    }
})

router.post('/form/:id', async (req, res) => {
    if (await verify(req.headers['g-recaptcha-response'])) {
        try {
            const updatedForm = await Form.findByIdAndUpdate(req.params.id, { $push: { "answers": req.body } })
            res.json({ data: "done!" })
        }
        catch (error) {
            console.log(error);
            return res.json({ data: error })
        }
    }
    else{
        console.log("not ok :(")
        return res.json({ data: "R U a robot?! please check the captcha!" })
    }
        

})

router.post('/newForm', async (req, res) => {
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
        console.log(error)
        res.json({ data: error });
    }

})



module.exports = router;