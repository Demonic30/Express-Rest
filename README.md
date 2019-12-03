# Express-Rest
⌢丠步䅯䥐•਍⌢丠步䅯䥐•਍

//Questions

app.get('/api/questions', db.getAllQuestions);

app.get('/api/answers', db.getAllAnswers);

app.get('/api/title', db.getAllTitle);

app.get('/api/questions/:number', db.getAllQuestionsByNumber);

app.get('/api/answers/:number', db.getAllAnswerByNumber);

app.post('/api/questions', db.insertQuestions);

app.post('/api/title', db.insertTitlequestion);

app.put('/api/questions/update/:no_question', db.updateQuestion);

app.delete('/api/questions/delete/:number:no_question', db.deleteQuestion);

app.delete('/api/survey/delete/:number', db.deleteSurvey);
