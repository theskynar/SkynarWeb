import { Request, Response } from "express"
import { Container } from "typedi"
import app from '../config/express'


export const Http = {
  Get: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {          
        const self = Container.get(target.constructor)

        app.get(path, descriptor.value.bind(self))
        return descriptor
    }
  },
  Post: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        app.post(path, descriptor.value.bind(self))
        return descriptor
    }
  },
  Put: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        app.put(path, descriptor.value.bind(self))
        return descriptor
      }
  },
  Delete: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        app.delete(path, descriptor.value.bind(self))
        return descriptor
      }
  }
}

