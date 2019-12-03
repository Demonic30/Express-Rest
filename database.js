const pgp = require('pg-promise')();
var db = pgp('postgres://dpypebjgwshfqv:54aecf7e68a2751929d3238e772ab2a99b4e583d88c817bdeebb0fd09d8b5f89@ec2-54-235-104-136.compute-1.amazonaws.com:5432/d4p6ukgjp7bm8q?ssl=true');

function getAllQuestions(req, res) {
    db.any('select * from questions')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL questions'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
        })
}
function getAllTitle(req, res) {
    db.any('select * from titlequestion')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL titlequestion'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
        })
}
function getAllAnswers(req, res) {
    db.any('select * from answer')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL answers'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
        })
}

function getAllAnswerByNumber(req, res) {
    db.any('select * from answers where number =' + req.params.number)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved answers number:' +
                        req.params.number
                        
                });
        })
       .catch(function (error) {
            console.log('ERROR:', error)
        

        })
}
function getAllQuestionsByNumber(req, res) {
    db.any('select * from questions where number =' + req.params.number)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved question number:' +
                        req.params.number
                        
                });
        })
       .catch(function (error) {
            console.log('ERROR:', error)
        

        })
}

function deleteQuestion(req, res) {
    db.any('delete from questions where number=' + req.params.number+'and no_question=' + req.params.no_question, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete no_question=' + req.params.no_question
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to delete question no_question:' + req.params.no_question
                })
        })
}

function deleteSurvey(req, res) {
    db.any('delete from questions where number=' + req.params.number, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete number=' + req.params.number
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to delete question number:' + req.params.number
                })
        })
}
function updateQuestion(req, res) {
    db.any(`update questions set image1='${req.body.image1}', image2='${req.body.image2}', image3='${req.body.image3}', image4='${req.body.image4}', number='${req.body.number}', question='${req.body.question}', question_type='${req.body.question_type}', answer1='${req.body.answer1}', answer2='${req.body.answer2}', answer3='${req.body.answer3}', answer4='${req.body.answer4}', status='${req.body.status}', image5='${req.body.image5}', image6='${req.body.image6}', image7='${req.body.image7}', image8='${req.body.image8}', image9='${req.body.image9}', image10'${req.body.image10}', answer5='${req.body.answer5}', answer6='${req.body.answer6}', answer7='${req.body.answer7}', answer8='${req.body.answer8}', answer9='${req.body.answer9}', answer10='${req.body.answer10}' where no_question =`  + req.params.no_question )
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Updated one question'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to update questions no_question:' + req.params.no_question
                })
        })
}

function insertQuestions(req, res) {
    console.log(req.body)
    var image1 = "'"+req.body.image1+"'"
    var image2 = "'"+req.body.image2+"'"
    var image3 = "'"+req.body.image3+"'"
    var image4 = "'"+req.body.image4+"'"
    var number = "'"+req.body.number+"'"
    var question = "'"+req.body.question+"'"
    var question_type = "'"+req.body.question_type+"'"
    var answer1 = "'"+req.body.answer1+"'"
    var answer2 = "'"+req.body.answer2+"'"
    var answer3 = "'"+req.body.answer3+"'"
    var answer4 = "'"+req.body.answer4+"'"
    var no_question = "'"+req.body.no_question+"'"
    var status = "'"+req.body.status+"'"
    var image5 = "'"+req.body.image5+"'"
    var image6 = "'"+req.body.image6+"'"
    var image7 = "'"+req.body.image7+"'"
    var image8 = "'"+req.body.image8+"'"
    var image9 = "'"+req.body.image9+"'"
    var image10 = "'"+req.body.image10+"'"
    var answer5 = "'"+req.body.answer5+"'"
    var answer6 = "'"+req.body.answer6+"'"
    var answer7 = "'"+req.body.answer7+"'"
    var answer8 = "'"+req.body.answer8+"'"
    var answer9 = "'"+req.body.answer9+"'"
    var answer10 = "'"+req.body.answer10+"'"

    if(req.body.image1 == ''||req.body.image1 == undefined){
        image1 = null;
    }
    if(req.body.image2 == ''||req.body.image2 == undefined){
        image2 = null;
    }
    if(req.body.image3 == ''||req.body.image3 == undefined){
        image3 = null;
    }
    if(req.body.image4 == ''||req.body.image4 == undefined){
        image4 = null;
    }
    if(req.body.number == ''||req.body.number == undefined){
        number = null;
    }
    if(req.body.question == ''||req.body.question == undefined){
        question = null;
    }
    if(req.body.question_type == ''||req.body.question_type == undefined){
        question_type = null;
    }
    if(req.body.answer1 == ''||req.body.answer1 == undefined){
        answer1 = null;
    }
    if(req.body.answer2 == ''||req.body.answer2 == undefined){
        answer2 = null;
    }
    if(req.body.answer3 == ''||req.body.answer3 == undefined){
        answer3 = null;
    }
    if(req.body.answer4 == ''||req.body.answer4 == undefined){
        answer4 = null;
    }
    if(req.body.no_question == ''||req.body.no_question == undefined){
        no_question = null;
    }
    if(req.body.status == ''||req.body.status == undefined){
        status = null;
    }
    if(req.body.image5 == ''||req.body.image5 == undefined){
        image5 = null;
    }
    if(req.body.image6 == ''||req.body.image6 == undefined){
        image6 = null;
    }
    if(req.body.image7 == ''||req.body.image7 == undefined){
        image7 = null;
    }
    if(req.body.image8 == ''||req.body.image8 == undefined){
        image8 = null;
    }
    if(req.body.image9 == ''||req.body.image9 == undefined){
        image9 = null;
    }
    if(req.body.image10 == ''||req.body.image10 == undefined){
        image10 = null;
    }
    if(req.body.answer5 == ''||req.body.answer5 == undefined){
        answer5 = null;
    }
    if(req.body.answer6 == ''||req.body.answer6 == undefined){
        answer6 = null;
    }
    if(req.body.answer7 == ''||req.body.answer7 == undefined){
        answer7 = null;
    }
    if(req.body.answer8 == ''||req.body.answer8 == undefined){
        answer8 = null;
    }
    if(req.body.answer9 == ''||req.body.answer9 == undefined){
        answer9 = null;
    }
    if(req.body.answer10 == ''||req.body.answer10 == undefined){
        answer10 = null;
    }
    
    db.any(`insert into questions(image1, image2, image3, image4, number, question, question_type, answer1, answer2, answer3, answer4, no_question, status, image5, image6, image7, image8, image9, image10, answer5, answer6, answer7, answer8, answer9, answer10)` +
        `values(${image1}, ${image2}, ${image3}, ${image4}, ${number}, ${question}, ${question_type}, ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${no_question}, ${status}, ${image5}, ${image6}, ${image7}, ${image8}, ${image9}, ${image10}, ${answer5}, ${answer6}, ${answer7}, ${answer8}, ${answer9}, ${answer10})` 
    )
            
    // db.any('insert into questions(image1, image2, image3, image4, number, question, question_type, answer1, answer2, answer3, answer4, no_question, status, image5, image6, image7, image8, image9, image10, answer5, answer6, answer7, answer8, answer9, answer10)' +
    //     "values("+image1+", '"+req.body.image2+"', '"+ req.body.image3+"', '"+ req.body.image4+"', "+ req.body.number+", '"+ req.body.question+"', '"+ req.body.question_type+"', '"+ req.body.answer1+"', '"+req.body.answer2+"', '"+ req.body.answer3+"', '"+req.body.answer4+"', "+ req.body.no_question+", "+ req.body.status+", '"+req.body.image5+"', '"+req.body.image6+"', '"+ req.body.image7+"', '"+ req.body.image8+"', '"+ req.body.image9+"', '"+ req.body.image10+"', '"+ req.body.answer5+"', '"+ req.body.answer6+"', '"+ req.body.answer7+"', '"+ req.body.answer8+"', '"+ req.body.answer9+"', '"+ req.body.answer10+"')"
    // )

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to insert Questions :' + req.params.number
                })
        })

}

function insertTitlequestion(req, res) {
    console.log(req.body)
    db.any(`insert into titlequestion(number, icon, description, name)` +
        `values('${req.body.number}', '${req.body.icon}', '${req.body.description}', '${req.body.name}'` 
         )
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to insert Questions :' + req.params.number
                })
        })

}

// db.any("insert into questions (image1, image2, image3, image4, number, question, question_type, answer1, answer2, answer3, answer4, no_question, status)"+
//     "values ('"+req.body.image1+"','"+req.body.image2+"','"+req.body.number+"','"+req.body.question+"','"+req.body.question_type+"','"+req.body.answer1+"','"+req.body.answer2+"','"+req.body.no_question+"','"+req.body.status+"')")

// function getProductByID(req, res) {
//     db.any('select * from products where id =' + req.params.id)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     data: data,
//                     message: 'Retrieved products id:' + req.params.id
//                 });
//         })
//         .catch(function (error) {
//             res.status(500)
//                 .json({
//                     status: 'Failed',
//                     message: 'Failed to Retrieved products id:' + req.params.id
//                 })
//         })
// }


module.exports = {
    getAllQuestions,
    getAllAnswers,
    getAllTitle,
    getAllQuestionsByNumber,
    getAllAnswerByNumber,
    // getProductByID,
    insertQuestions,
    insertTitlequestion,
    deleteQuestion,
    deleteSurvey,
    updateQuestion
    // updateProduct,
    // deleteProduct
    
};