import * as jwt from "jsonwebtoken"
import {Request, Response} from "express"
import {UsuarioModel} from "../models/UsuarioModel"
const secret = process.env.JWT_TOKEN

export function Auth() {
    return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const rotaOriginal = descriptor.value

        descriptor.value = function(req: Request, res: Response, next: any) {

            let token = req.headers['x-access-token']
            if(!token) return res.status(401).send("Not authorized");

            return jwt.verify(token.toString(), secret, (err: any, decoded: UsuarioModel) => {
                if(err) return res.status(401).send("Not authorized");
                return rotaOriginal.apply(this, [req, res, decoded])
            })
        }

        return descriptor
    }
}