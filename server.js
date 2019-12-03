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

//Questions
app.get('/api/questions', db.getAllQuestions);
app.get('/api/answers', db.getAllAnswers);
app.get('/api/title', db.getAllTitle);
app.get('/api/questions/:number', db.getAllQuestionsByNumber);
app.get('/api/answers/:number', db.getAllAnswerByNumber);
app.post('/api/questions', db.insertQuestions);
app.post('/api/title', db.insertTitlequestion);
app.put('/api/questions/update/no_question', db.updateQuestion);
app.delete('/api/questions/delete/:number:no_question', db.deleteQuestion);
app.delete('/api/survey/delete/:number', db.deleteSurvey);


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});