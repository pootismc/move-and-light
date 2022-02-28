const express = require ('express');
const app = express();
const path = require ('path');
const indexRouter = require ('./routers/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static (path.join(__dirname, '../public')));
app.use('/', indexRouter);

app.listen (3000, function(){
    console.log("El servidor esta corriendo en el puerto 3000")
})