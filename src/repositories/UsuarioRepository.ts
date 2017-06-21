import * as mongoose from "mongoose"
import {IUsuarioEntity} from "../entitys/IUsuarioEntity"
const Schema = mongoose.Schema

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

export const UsuarioOdm = mongoose.model<IUsuarioEntity>("Usuario", schema, "Usuarios")