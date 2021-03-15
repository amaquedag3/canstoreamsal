const express = require('express');
const router = express.Router();
const numeroCtrl = require('../controllers/numero.controller');

router.get('/', numeroCtrl.getAllNumeros);

module.exports = router;
