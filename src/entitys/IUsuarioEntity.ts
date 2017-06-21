import * as mongoose from "mongoose"

export interface IUsuarioEntity extends mongoose.Document {
    nome: String
    nascimento: Date
    genero: String

    email: String
    password: String
    imagem: String
}