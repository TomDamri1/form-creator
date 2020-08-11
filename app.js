const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongooseConfiguration = require('./mongooseConfiguration');

const api = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use('/', api);

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

