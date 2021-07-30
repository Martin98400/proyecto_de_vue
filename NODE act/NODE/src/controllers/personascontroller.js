const { json } = require('express');
const connection  = require('../config/connections');




function listar (req,res){

if(connection){
    let sql = "select * from BOARDGAMES";
    
    connection.query(sql, (err, boardgames) => {
        if(err) {
            res.status(400).json(err);
        } else {

        res.json(boardgames);        }
    })
}
}


function listarFavorites (req,res){
    
    if(connection){
        let sql = "select * from vfavorites";
        
        connection.query(sql, (err, data) => {
            if(err) {
                res.status(400).json(err);
            } else {
    
            res.json(data);        }
        })
    }
    }

function optenerboardgamesid(req,res)
{
    if(connection){
        const {id} = req.params;
        let sql = `SELECT * FROM boardgames WHERE id = ${connection.escape(id)}`;
        connection.query(sql,(err,boardgames)=> {
        if(err){
            res.status(400).json(err);
        }else{

            let mensaje = "";
            if(boardgames === undefined || boardgames.length === 0)
                mensaje="juego no encontrado";

            res.json({result: boardgames[0], mensaje});
        }
    })
}
}


function agregar(req, res) {
    if(connection){
        console.log(req.body);
        const boardgames = req.body;

        if(!boardgames.Name.length!==80 && boardgames.Name){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(boardgames.Publisher.length!==60 && boardgames.Publisher) {
            return res.status(400).send({error: true, mensaje: "este campo no puede estar vacio"});
        }
        if(boardgames.Description.length!==200) {
            return res.status(400).send({error: true, mensaje: "la longitud puede ser de 200 caracteres"});
        }

        if(persona.Year.length !== 4) {
            return res.status(400).send({error: true, mensaje: "La longitud debe de ser de 4 caracteres."});
        }

        let sql = "INSERT INTO boardgames set ?";

        connection.query(sql, [boardgames], (err, data) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.json({error: false, result: data, mensaje: "juego guardado con éxito."})
            }
        })
    }
}

function editar(req, res) {
    if(connection) {
        const { id } = req.params;
        const boardgames = req.body;

        let sql = "UPDATE boardgames set ? WHERE id = ?";

        connection.query(sql, [boardgames, id], (err, data) => {
            if(err) {
                res.status(400).json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0)
                    mensaje ="La información es la misma";
                else
                    mensaje ="Persona actualizada con exito"
                res.json({error: false, result: data, mensaje});
            }
        });
    }
}

function eliminar(req, res){
    if(connection) {
        const {id} = req.params;

        let sql = "DELETE FROM boardgames WHERE id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err){
                res.status(400).json(err);
            } else {
                let mensaje = "";
                if(data.affectedRows === 0)
                    mensaje = "juego no encontrado";
                else
                    mensaje = "juego eliminada con éxito.";
                res.json({error: false, result: data, mensaje});
            }
        });

    }
}


module.exports = {
    listar,
   optenerboardgamesid,
    agregar,
    editar,
    eliminar,
    listarFavorites
}