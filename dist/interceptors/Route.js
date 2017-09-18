"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const index_1 = require("../index");
function preparePath(path) {
    const newPath = index_1.App.expressApp.get("baseRoute") + path;
    return newPath;
}
exports.Http = {
    Get: (path, ignore = false) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            const pathPrepared = ignore ? path : preparePath(path);
            index_1.App.expressApp.get(pathPrepared, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Post: (path, ignore = false) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            const pathPrepared = ignore ? path : preparePath(path);
            index_1.App.expressApp.post(pathPrepared, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Put: (path, ignore = false) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            const pathPrepared = ignore ? path : preparePath(path);
            index_1.App.expressApp.put(pathPrepared, descriptor.value.bind(self));
            return descriptor;
        };
    },
    Delete: (path, ignore = false) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            const pathPrepared = ignore ? path : preparePath(path);
            index_1.App.expressApp.delete(pathPrepared, descriptor.value.bind(self));
            return descriptor;
        };
    }
};
//# sourceMappingURL=Route.js.map