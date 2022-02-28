const express = require ('express');
const app = express();
const path = require ('path');
const indexRouter = require ('./routers/index');
const session = require('express-session');


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, '../public'))); 
app.use('/', indexRouter);

// var port = process.env.PORT || 3000;

// app.listen (3000, function(){
//     console.log("El servidor esta corriendo en el puerto 3000")
// })

app.listen(process.env.PORT || 8080);