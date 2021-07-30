const mysql = require('mysql');

const objectConnection = {
    "host":"localhost",
    "port":3306,
    "user": "root",
    "password":"password",
    "database":"proyectovue"

}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) =>{
if(error) {
    console.log("ha ocurrido un error 0.0: ",error);
}
    else{
console.log("base de datos conectada:");
 
}
});

module.exports = myConn;