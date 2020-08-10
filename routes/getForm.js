const express = require('express');
const router = express.Router();
const Form = require('../models/FormSchema');

router.get('/:id', async (req, res) => {
    try {   
        const id = req.params.id;
        console.log(`getting request : get-form : ${id}`);
        const forms = await Form.findOne({_id:id}).populate('fields');
        res.json(forms);
        console.log(`get-form ${id} status: done!`);
    } 
    catch (error) {
        console.log(`get-form status: ERROR`);
        return res.json({data : error})
    }
})



module.exports = router;