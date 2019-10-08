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
    db.any(`insert into questions(image1, image2, image3, image4, number, question, question_type, answer1, answer2, answer3, answer4, no_question, status)` +
        `values(${image1}, ${image2}, ${image3}, ${image4}, ${number}, ${question}, ${question_type}, ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${no_question}, ${status})`, { image1: 'http://www.clipartbest.com/cliparts/9iR/LX4/9iRLX4k4T.jpg',
        image2: 'https://www.logolynx.com/images/logolynx/00/00223e5ceabf9dcaf376f11fc67d2607.jpeg',
        image3: 'null',
        image4: 'null',
        number: '3',
        question: 'เพศของคุณ',
        question_type: 'quick_reply',
        answer1: 'ชาย',
        answer2: 'หญิง',
        answer3: 'null',
        answer4: 'null',
        no_question: '1',
        status: '0' })
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
                    message: 'Failed to insert products id:' + req.params.id
                })
        })

}

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
    // updateProduct,
    // deleteProduct
    
};