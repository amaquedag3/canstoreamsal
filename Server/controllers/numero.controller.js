const modelsNumero = require('../models/numero');
const numeroCtrl = { };


numeroCtrl.getAllNumeros = async (req, res) => {
    const numeros = await modelsNumero.find();
    res.json(numeros);
}

module.exports = numeroCtrl;