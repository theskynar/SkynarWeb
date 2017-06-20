export class UsuarioModel {
    nome: String
    nascimento: Date
    genero: String

    email: String
    password: String
    imagem: String

    updatedAt: Date
    createdAt: Date

    constructor(nome="", nascimento=new Date(), genero="", email="", password="", imagem="", updatedAt: Date, createdAt: Date){
        this.nome = nome
        this.nascimento = nascimento
        this.genero = genero
        this.email = email
        this.password = password
        this.imagem = imagem

        this.updatedAt = updatedAt
        this.createdAt = createdAt
    }
}