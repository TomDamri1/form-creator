
const connectionString = `mongodb+srv://tomwixtask:tomwixtask123@cluster0.dqwui.mongodb.net/form-creator?retryWrites=true&w=majority`;
const mongooseConnectionSucceed = () => { console.log("connected to DB!") }

module.exports = [
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    mongooseConnectionSucceed
]