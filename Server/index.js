const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
const cors = require('cors');

//variables de entorno
require('dotenv').config({ path: 'vars.env'});

//Settings
//app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/numeros', require('./routes/numero.routes'));

//leer host y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
//Starting Server
app.listen(port, host, () =>{
    console.log('Servidor funcionando en puerto: ' + port  );
});