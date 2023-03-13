const express = require('express');
const app = express();
const port = 2000;


app.set('view engine', 'ejs');
// app.set('views', '');

app.get('/', function(req, res)
{
    // res.end('<h1>hello world</h1>');
    res.render('home');
})


app.listen(port, ()=>{
    console.log('server is litening on port', port);
})