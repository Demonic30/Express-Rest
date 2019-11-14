var express = require('express');
var app = express();
var db = require('./database');
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());//Important
app.use(bodyParser.urlencoded({
    extended: true
}));

// index page
app.get('/', function (req, res) {
    res.send('Heroku is running');
});

var output = {
    status: 'succes',
    message: 'Rest Api Is Working'
}
app.get('/api/json', function (req, res) {
    res.status(200).json(output);

});

//Products
app.get('/api/questions', db.getAllQuestions);
// app.get('/api/products/:id', db.getProductByID);
app.post('/api/question', db.insertQuestions);
app.post('/api/title', db.insertTitlequestion);
// app.put('/api/products/:id', db.updateProduct);
// app.delete('/api/products/delete/:id', db.deleteProduct);


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});