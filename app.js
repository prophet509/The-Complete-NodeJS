const http = require('http');
const fs = require('fs');
const express = require('express');
const  bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

var app = express(); 
app.set('view engine', 'ejs');
app.set('views', 'views');


const request = require('./routes');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found',path: 404});
});


app.listen(3000);