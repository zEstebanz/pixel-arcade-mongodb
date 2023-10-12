import mongoose from "mongoose";
//Creamos un Schema
const turnoSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  opcion: {
    type: String,
    enum: ['maquinas', 'consola', 'otros'],
    required: true,
  },
})

//Creamos el modelo a partir del Schema
//La funcion crea una coleccion en la BD "turno"
export const TurnoModel = mongoose?.models?.turno