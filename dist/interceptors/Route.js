"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const index_1 = require("../index");
function preparePath(path) {
    const newPath = index_1.App.expressApp.get("baseRoute") + path;
    return newPath;
}
exports.Http = {
    Get: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.get(preparePath(path), descriptor.value.bind(self));
            return descriptor;
        };
    },
    Post: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.post(preparePath(path), descriptor.value.bind(self));
            return descriptor;
        };
    },
    Put: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.put(preparePath(path), descriptor.value.bind(self));
            return descriptor;
        };
    },
    Delete: (path) => {
        return function (target, propertyKey, descriptor) {
            const self = typedi_1.Container.get(target.constructor);
            index_1.App.expressApp.delete(preparePath(path), descriptor.value.bind(self));
            return descriptor;
        };
    }
};
//# sourceMappingURL=Route.js.map