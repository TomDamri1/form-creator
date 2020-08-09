const mongoose = require('mongoose');

const AnswersSchema = mongoose.Schema({
    answers : Array,
})

module.exports = Answer = mongoose.model('Answer', AnswersSchema);