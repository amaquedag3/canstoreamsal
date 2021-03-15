const mongoose = require('mongoose');
const URL = 'mongodb://localhost/bdFerStore';//URL BD
mongoose.connect(URL)
    .then(db => console.log('BD connected'))
    .catch(err => console.log(err));

module.exports = mongoose;