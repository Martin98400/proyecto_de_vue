
const express = require('express');

const app = express();


app.set('port', process.env.PORT || 3000);   

app.use(express.urlencoded({extended: false }));
app.use(express.json());

//para ver si nos podemos conectar
require('./config/connections');

//rutas

app.use(require('./routes/personasrutas'));

/*app.get('/',(req,res)=>{
    console.log("se envio un mensaje");
    res.json({mensaje:"hola"});
});

app.get('/otra-ruta',(req,res)=>{
    res.json({mensaje:"hola 2 otra ruta"});
});
*/

//levantar el servidor 
app.listen(app.get('port'),error =>{
    if (error){
            console.log("ha ocurrido un error o.O");
    }
    else{
        console.log("servidor en punto:", app.get ('port'));

            }
    })