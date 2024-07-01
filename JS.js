//conexion a la base de datos
const mongoose = require ('mongoose')
const url_bd = "mongodb://localhost:27017/alumnos"

mongoose.connect ("mongodb://localhost:27017/alumnos")
.then(()=>{
    console.log ("si jala la conexion we")
})
.catch((error)=>{
    console.log("np jalata tú")
})
//Esquema de la base de datos
const Esquema_alumno = new mongoose.schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    Numero:{
        type:Number
    }
})
//creando una tabla
const modelo_alumno = new mongoose.model
("Tabla de datos",Esquema_alumno)
modelo_alumno.create ({
    name: "Angel",
    apepat:"Larios",
    Numero: 449
})