"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
exports.Inject = typedi_1.Inject;
exports.Service = typedi_1.Service;
const config_1 = require("./config/config");
exports.Config = config_1.Config;
const Route_1 = require("./interceptors/Route");
exports.Http = Route_1.Http;
const app_1 = require("./app");
exports.App = app_1.App;
//# sourceMappingURL=index.js.map