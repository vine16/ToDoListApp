const express = require('express');
const app = express();
const port = 2000;
const db = require('./config/mongoose')
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true })); //to collect data in req.body

app.set('view engine', 'ejs');
// app.set('views', '');

app.use('/', require('./routes/index'));


app.listen(port, ()=>{
    console.log('server is litening on port', port);
})