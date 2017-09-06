import { Request, Response } from "express"
import { Container } from "typedi"
import { App } from '../index'

function preparePath(path: string): string {
  const newPath = App.expressApp.get("baseRoute") + path;
  return newPath;
}

export const Http = {
  Get: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {          
        const self = Container.get(target.constructor)

        App.expressApp.get(preparePath(path), descriptor.value.bind(self))
        return descriptor
    }
  },
  Post: (path: string) => {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.post(preparePath(path), descriptor.value.bind(self))
        return descriptor
    }
  },
  Put: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.put(preparePath(path), descriptor.value.bind(self))
        return descriptor
      }
  },
  Delete: (path: string) => {
      return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        const self = Container.get(target.constructor)

        App.expressApp.delete(preparePath(path), descriptor.value.bind(self))
        return descriptor
      }
  }
}

