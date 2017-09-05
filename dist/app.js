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
        Object.assign(this.config, config);
        this.Init();
        requireAll({
            dirname: __dirname + '/dist/controllers',
            filter: /.+\.js$/,
            recursive: true
        });
    }
    Init() {
        this.app = App.expressApp;
        if (this.config.bodyParserEnabled)
            this.app.use(bodyParser.json());
        if (this.config.corsEnabled)
            this.app.use(cors());
        if (this.config.serverRenderingEnabled) {
            this.app.use(express.static('./views'));
            this.app.set('views', './views');
            this.app.set('view engine', this.config.serverRenderingEngine);
        }
    }
    Configure(callback) {
        callback(this.app);
    }
    get express() {
        return this.app;
    }
}
App.expressApp = express();
exports.App = App;
//# sourceMappingURL=app.js.map