var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

var db = require('./database');
app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/delete/:id', db.deleteProduct);
//purchase_item
app.get('/api/purchase_item', db.getPurchase_item);
app.get('/api/purchase_item/:id', db.getPurchase_itemByID);
app.post('/api/purchase_item', db.insertPurchase_item);
app.put('/api/purchase_item/:id', db.updatePurchase_item);
app.delete('/api/purchase_item/delete/:id', db.DeletePurchase_item);
//purchase
app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase);
app.put('/api/purchase/:id', db.updatePurchase);
app.delete('/api/purchase/delete/:id', db.DeletePurchase);
//user
app.get('/api/user', db.getUser);
app.get('/api/user/:id', db.getUserByID);
app.post('/api/user', db.insertUser);
app.put('/api/user/:id', db.updateUser);
app.delete('/api/user/delete/:id', db.DeleteUser);

// index page
app.get('/', function (req, res) {
res.send('Heroku is running');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});