"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const index_1 = require("../index");
exports.Http = {
    Get: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.get(path, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Post: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.post(path, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Put: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.put(path, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Delete: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.delete(path, descriptor.value.bind(self));
            return descriptor;
        };
    }
};
//# sourceMappingURL=Route.js.map