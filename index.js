//importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//creamos una constante para el valor del puerto
 const PUERTO = process.env.PORT || 3000;

 //emplear nuestras rutas
 let pintoresRouter = require('./routes/pintor');

 //sitioe web y hbs
 const app = express();
 app.set('view engine', 'hbs');
 hbs.registerPartials(__dirname+'/views/partials');
 app.use(express.static(__dirname+'/public'));

 //vamos a decirle a express la ruta a usar
 app.use('/', pintoresRouter);

 /*coneccion con mongo db*/
 mongoose.Promise = global.Promise;
 const cadena = 'mongodb+srv://payan:Rowgamer345@payanyael-qasmr.mongodb.net/paginaweb';
 mongoose.connect(cadena,{
     useNewUrlParser:true,useUnifiedTopology:true})
     .then(()=>{
         console.log('conexion establecida :D');
     })
     .catch(err=> Console.log(err));
 
//arrancar el servidor
app.listen(PUERTO,()=>{
    console.log('escuchando el puerto...')
})