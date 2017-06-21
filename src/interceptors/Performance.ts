import {Request, Response} from "express"

export function Performance() {
    return function(target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const rotaOriginal = descriptor.value

        descriptor.value = function(req: Request, res: Response, next: any) {
            const before = process.hrtime()

            const retorno = rotaOriginal.apply(this, [req, res, next])

            const after = process.hrtime(before)
            const time = (after[0] * 1e9 + after[1]) / 1e6

            console.log(`${propertyKey} (Performance Test) -> Method fired on ${time}ms`)
            
            return retorno
        }

        return descriptor
    }
}