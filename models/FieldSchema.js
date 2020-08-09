const mongoose = require('mongoose');

const FieldSchema = mongoose.Schema({
    order : String,
    fieldLabel: {
        type: String,
        required: true
    },
    inputName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true
    },
})

module.exports = Field = mongoose.model('Field', FieldSchema);