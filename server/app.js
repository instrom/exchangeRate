if(process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const mongoose = require('mongoose');
const express = require('express')
const morgan = require('morgan');
const app = express()
const port = 3000
const cors = require('cors')
const db = mongoose.connection;
const errorHandlers= require('./helpers/errorHandler')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
mongoose.connect('mongodb://localhost/exchangeCurrency', {useNewUrlParser: true});


const currenciesRoutes = require('./routes/currenciesRoutes')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('masuk')
  // we're connected!
});

app.use('/api/currencies',currenciesRoutes)



app.use(errorHandlers)
    
app.listen(port, () => console.log(`Example app listening on port ${port}`))