const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const {mongoose} = require('./database');

const port = process.env.PORT || 3000

app.set('port', port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));

//Routes 
app.use('./api/cars', require('./routes/cars.routes'));

//Server 
app.listen(app.get('port'), () => {
    console.log('Servidor inicializado en puerto: ' + app.get('port') /*port*/);
});