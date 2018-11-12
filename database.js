const pgp = require('pg-promise')();
var db = pgp('postgres://xzellefetksmcl:8a85bfb87228185e5760c671646792e407eb1f51b0d55a6a6a67bfa10cd01269@ec2-75-101-138-26.compute-1.amazonaws.com:5432/d1ql9lkuub4pcv?ssl=true');

function getAllProducts(req, res) {
    db.any('select * from products')
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

function deleteProduct(req, res) {
    db.any('DELETE from products where id=' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to delete products id:' + req.params.id
                })
        })
    db.any('select * from products').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}

function updateProduct(req, res) {
    db.any(`update products set title=${title},price=${price},tags=${tags} where id =` + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Updated one product'
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'Failed',
                    message: 'Failed to update products id:' + req.params.id
                })
        })
}

function insertProduct(req, res) {
    db.any(`insert into products(id, title, price, created_at, tags)` +
        `values(${id}, ${title}, ${price}, ${created_at}, ${tags})`,req.body)
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
    db.any('select * from products').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'add product id=' + req.params.id
            });
    })
}

function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved products id:' + req.params.id
            })
        })
}
//Purchase_item
function getPurchase_item(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase_item'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved Purchase_item id:' + req.params.id
            })
        })
}

function DeletePurchase_item(req, res) {
    db.any('DELETE from purchase_items where id=' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete purchase_item id=' + req.params.id
                })
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to delete purchase_item id:' + req.params.id
            })
        })
    db.any('select * from purchase_items').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete purchase_item id=' + req.params.id
            });
    })
}


function updatePurchase_item(req, res) {
    db.any(`update purchase_items set id=${id},id=${product_id},price=${price},quantity=${quantity},status=${status} where id =` + req.params.id,req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase_item id='+req.params.id
            });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to update products id:' + req.params.id
            })
        })
}

function insertPurchase_item(req, res) {
    db.any(`insert into purchase_items(id,purchase_id,product_id,price,quantity)` +
        `values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})`,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_item'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to insert purchase_item id:' + req.params.id
            })
        })

    db.any('select * from purchase_items').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Insert id=' + req.params.id
            });
    })
}



function getPurchase_itemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved Purchase_items id:' + req.params.id
            })
        })
}
//Purchase
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved Purchases id:' + req.params.id
            })
        })
}

function DeletePurchase(req, res) {
    db.any('DELETE from purchases where id=' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Delete Purchases id:' + req.params.id
            })
        })
    db.any('select * from purchases').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}


function updatePurchase(req, res) {
    db.any(`update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where id =` + req.params.id,req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id='+req.params.id
            });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Update Purchases id:' + req.params.id
            })
        })
}

function insertPurchase(req, res) {
    db.any(`insert into purchases(id,created_at,name,address,state,zipcode,user_id)` +
        `values(${id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${user_id})`,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Insert Purchases id:' + req.params.id
            })
        })

    db.any('select * from purchases').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'insert id=' + req.params.id
            });
    })
}



function getPurchaseByID(req, res) {
    db.any('select * from purchases where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved Purchase id:' + req.params.id
            })
        })
}
//user
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved user id:' + req.params.id
            })
        })
}

function DeleteUser(req, res) {
    db.any('DELETE from users where id =' + req.params.id,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Delete user id:' + req.params.id
            })
        })
    db.any('select * from users').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}


function updateUser(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where id =' + req.params.id,req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update user id=' + req.params.id
            });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to update user id:' + req.params.id
            })
        })
}

function insertUser(req, res) {
    db.any(`insert into users(id,email,password,details,created_at)` +
        `values(${id}, ${email}, ${password}, ${details}, ${created_at}`,req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to insert user id:' + req.params.id
            })
        })

    db.any('select * from users').then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Delete id=' + req.params.id
            });
    })
}



function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved User id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
            console.log('ERROR:', error)
            .json({
                status: 'Failed',
                message: 'Failed to Retrieved User id:' + req.params.id
            })
        })
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getPurchase_item,
    getPurchase_itemByID,
    insertPurchase_item,
    updatePurchase_item,
    DeletePurchase_item,
    getPurchase,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getUser,
    getUserByID,
    insertUser,
    updateUser,
    DeleteUser
};