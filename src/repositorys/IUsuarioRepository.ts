import * as mongoose from "mongoose"
const Schema = mongoose.Schema

export interface IUsuario extends mongoose.Document {
    nome: String
    nascimento: Date
    genero: String

    email: String
    password: String
    imagem: String
}

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imagem: String
})

export const UsuarioOdm = mongoose.model("Usuario", schema, "Usuarios")