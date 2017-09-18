import { Request, Response } from "express"
import { Container } from "typedi"
import { App } from '../index'

function preparePath(path: string): string {
  const newPath = App.expressApp.get("baseRoute") + path;
  return newPath;
}

export const Http = {
  Get: (path: string, ignore) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {          
        const self = Container.get(target.constructor)

        App.expressApp.get(ignore ? path : preparePath(path), descriptor.value.bind(self))
        return descriptor
    }
  },
  Post: (path: string, ignore) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.post(ignore ? path : preparePath(path), descriptor.value.bind(self))
        return descriptor
    }
  },
  Put: (path: string, ignore) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.put(ignore ? path : preparePath(path), descriptor.value.bind(self))
        return descriptor
      }
  },
  Delete: (path: string, ignore) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.delete(ignore ? path : preparePath(path), descriptor.value.bind(self))
        return descriptor
      }
  }
}

