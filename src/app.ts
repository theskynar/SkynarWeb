declare type ConfigureCallback = (app: express.Express) => void;

import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import {Config} from "./config/config";
import {IConfig} from "./types/IConfig";
const consign = require("consign");

export class App {
  private app: express.Express;
  private config: Config = new Config();
  static expressApp: express.Express = express();

  constructor(config: IConfig = {}) {
    Object.assign(this.config, config);
    this.Init();
    console.log(consign);
    consign().include(`${process.execPath}/dist/controllers`).then();
  }

  private Init() {
    this.app = App.expressApp;
    if(this.config.bodyParserEnabled) this.app.use(bodyParser.json());
    if(this.config.corsEnabled) this.app.use(cors());

    if(this.config.serverRenderingEnabled){
      this.app.use(express.static('./views'))
      this.app.set('views', './views')
      this.app.set('view engine', this.config.serverRenderingEngine)
    }
  }

  public Configure(callback: ConfigureCallback): void {
    callback(this.app);
  }

  public get express(): express.Express {
    return this.app;
  }
}
