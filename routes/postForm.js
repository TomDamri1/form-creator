const express = require('express');
const router = express.Router();
const Form = require('../models/FormSchema');

router.post('/:id', async (req, res) => {
    try {   
        console.log("getting (post) request : post-form");
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, {$push: {"answers": req.body}})
        console.log("post-form status: done!");
        res.json({data : "done!"})
        
    } catch (error) {
        console.log(error);
        console.log("post-form status: ERROR");
        return res.json({data : error})
    }
})



module.exports = router;