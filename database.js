const pgp = require('pg-promise')();
var db = pgp('postgres://dpypebjgwshfqv:54aecf7e68a2751929d3238e772ab2a99b4e583d88c817bdeebb0fd09d8b5f89@ec2-54-235-104-136.compute-1.amazonaws.com:5432/d4p6ukgjp7bm8q?ssl=true');

function getAllQuestions(req, res) {
    db.any('select * from questions')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            res.status(500)
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
// function deleteProduct(req, res) {
//     db.any('delete from products where id=' + req.params.id, req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Delete id=' + req.params.id
//                 })
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//             res.status(500)
//                 .json({
//                     status: 'Failed',
//                     message: 'Failed to delete products id:' + req.params.id
//                 })
//         })
// }

// function updateProduct(req, res) {
//     db.any('update products set title=${title},price=${price},created_at=${created_at} where id =' + req.params.id,req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     data: data,
//                     message: 'Updated one product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//             res.status(500)
//                 .json({
//                     status: 'Failed',
//                     message: 'Failed to update products id:' + req.params.id
//                 })
//         })
// }

function insertQuestions(req, res) {
    console.log(req.body)
    db.any(`insert into questions(image1, image2, image3, image4, number, question, question_type, answer1, answer2, answer3, answer4, no_question, status, image5, image6, image7, image8, image9, image10, answer5, answer6, answer7, answer8, answer9, answer10)` +
        `values('${req.body.image1}', '${req.body.image2}', '${req.body.image3}', '${req.body.image4}', '${req.body.number}', '${req.body.question}', '${req.body.question_type}', '${req.body.answer1}', '${req.body.answer2}', '${req.body.answer3}', '${req.body.answer4}', '${req.body.no_question}', '${req.body.status}'), '${req.body.image5}', '${req.body.image6}', '${req.body.image7}', '${req.body.image8}', '${req.body.image9}', '${req.body.image10}', '${req.body.answer5}', '${req.body.answer6}', '${req.body.answer7}', '${req.body.answer8}', '${req.body.answer9}', '${req.body.answer10}')` 
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
    // getProductByID,
    insertQuestions,
    insertTitlequestion,
    getAllQuestionsByNumber,
    // updateProduct,
    // deleteProduct
    
};