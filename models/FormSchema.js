const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fields: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Field'
        }
    ],
    answers:  [[{type:String}]]
})

module.exports = Form = mongoose.model('Form', FormSchema);