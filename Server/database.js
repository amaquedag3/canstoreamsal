const mongoose = require('mongoose');
const URL = 'mongodb://localhost/bdFerStore';//URL BD
require('dotenv').config({ path: 'vars.env'});

mongoose.connect(process.env.DB_URL)
    .then(db => console.log('BD connected'))
    .catch(err => console.log(err));

module.exports = mongoose;