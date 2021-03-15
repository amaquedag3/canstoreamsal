const mongoose = require('mongoose');
const { Schema } = mongoose;

const NumeroSchema = new Schema({
    value: { type: Number, required: true},
    tipoPremio: { type: Number, required: true }
});

module.exports  = mongoose.model('Numero', NumeroSchema);