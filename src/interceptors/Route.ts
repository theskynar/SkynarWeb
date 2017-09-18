import { Request, Response } from "express"
import { Container } from "typedi"
import { App } from '../index'

function preparePath(path: string): string {
  const newPath = App.expressApp.get("baseRoute") + path;
  return newPath;
}

export const Http = {
  Get: (path: string, ignore = false) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {          
        const self = Container.get(target.constructor)
        const pathPrepared = ignore ? path : preparePath(path)

        App.expressApp.get(pathPrepared, descriptor.value.bind(self))
        return descriptor
    }
  },
  Post: (path: string, ignore = false) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)
        const pathPrepared = ignore ? path : preparePath(path)

        App.expressApp.post(pathPrepared, descriptor.value.bind(self))
        return descriptor
    }
  },
  Put: (path: string, ignore = false) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)
        const pathPrepared = ignore ? path : preparePath(path)

        App.expressApp.put(pathPrepared, descriptor.value.bind(self))
        return descriptor
      }
  },
  Delete: (path: string, ignore = false) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)
        const pathPrepared = ignore ? path : preparePath(path)

        App.expressApp.delete(pathPrepared, descriptor.value.bind(self))
        return descriptor
      }
  }
}

