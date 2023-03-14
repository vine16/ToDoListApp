const express = require('express');
const app = express();
const port = 2000;

app.use(express.static('assets'));


app.set('view engine', 'ejs');
// app.set('views', '');

app.use('/', require('./routes/index'));


app.listen(port, ()=>{
    console.log('server is litening on port', port);
})