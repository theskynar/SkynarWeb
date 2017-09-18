"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.bodyParserEnabled = true;
        this.corsEnabled = true;
        this.serverRenderingEnabled = true;
        this.serverRenderingEngine = 'ejs';
        this.baseRoute = "";
        this.exposedHeaders = "";
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map