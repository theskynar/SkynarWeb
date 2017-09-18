"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const requireAll = require("require-all");
const config_1 = require("./config/config");
class App {
    constructor(config = {}) {
        this.config = new config_1.Config();
        this.config = Object.assign(this.config, config);
        this.SetConfig();
    }
    Init() {
        requireAll({
            dirname: process.cwd() + '/dist/controllers',
            filter: /.+\.js$/,
            recursive: true
        });
        return App.expressApp;
    }
    SetConfig() {
        App.expressApp.set("baseRoute", this.config.baseRoute);
        if (this.config.bodyParserEnabled)
            App.expressApp.use(bodyParser.json());
        if (this.config.corsEnabled)
            App.expressApp.use(cors({
                exposedHeaders: this.config.exposedHeaders
            }));
        if (this.config.serverRenderingEnabled) {
            App.expressApp.use(express.static('./views'));
            App.expressApp.set('views', './views');
            App.expressApp.set('view engine', this.config.serverRenderingEngine);
        }
    }
    Configure(callback) {
        callback(App.expressApp);
    }
    get express() {
        return App.expressApp;
    }
}
App.expressApp = express();
exports.App = App;
//# sourceMappingURL=app.js.map