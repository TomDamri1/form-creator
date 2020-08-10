const express = require('express');
const router = express.Router();
const Form = require('../models/FormSchema');

router.get('/', async (req, res) => {
    try {   
        console.log("getting request : get-all-forms");
        const forms = await Form.find();
        res.json(forms);
        console.log("get-all-forms status : done.")        
    } 
    catch (error) {
        console.log("get-all-forms status : ERROR.")        
        return res.json({data : error})
    }
})



module.exports = router;