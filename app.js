const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongooseConfiguration = require('./mongooseConfiguration');

const publishFormToServer = require('./routes/publishFormToServer');
const getAllForms = require('./routes/getAllForms');
const getForm = require('./routes/getForm');
const postForm = require('./routes/postForm');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use('/publish-form-to-server', publishFormToServer);
app.use('/get-all-forms', getAllForms);
app.use('/get-form', getForm);
app.use('/post-form', postForm)


app.listen(PORT);
try {
    mongoose.connect(...mongooseConfiguration);
    console.log(`listening on port ${PORT}`)
}
catch (error) {
    console.log("cannot connect to DB");
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`));
    });
}

