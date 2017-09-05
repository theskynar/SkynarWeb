import { Request, Response } from "express"
import { Container } from "typedi"
import { App } from '../index'


export const Http = {
  Get: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {          
        const self = Container.get(target.constructor)

        App.expressApp.get(path, descriptor.value.bind(self))
        return descriptor
    }
  },
  Post: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.post(path, descriptor.value.bind(self))
        return descriptor
    }
  },
  Put: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.put(path, descriptor.value.bind(self))
        return descriptor
      }
  },
  Delete: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.delete(path, descriptor.value.bind(self))
        return descriptor
      }
  }
}

