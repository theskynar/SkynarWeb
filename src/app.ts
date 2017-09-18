declare type ConfigureCallback = (app: express.Express) => void;

import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as requireAll from "require-all";

import {Config} from "./config/config";
import {IConfig} from "./types/IConfig";

export class App {
  private config: Config = new Config();
  static expressApp: express.Express = express();

  constructor(config: IConfig = {}) {
    this.config = Object.assign(this.config, config);
    this.SetConfig();
  }

  public Init(): express.Express {

    requireAll({
      dirname     :  process.cwd() + '/dist/controllers',
      filter      :  /.+\.js$/,
      recursive   : true
    });

    return App.expressApp;
  }

  private SetConfig() {
    App.expressApp.set("baseRoute", this.config.baseRoute);

    if(this.config.bodyParserEnabled) App.expressApp.use(bodyParser.json());
    if(this.config.corsEnabled) App.expressApp.use(cors({
      exposedHeaders: this.config.exposedHeaders
    }));

    if(this.config.serverRenderingEnabled){
      App.expressApp.use(express.static('./views'))
      App.expressApp.set('views', './views')
      App.expressApp.set('view engine', this.config.serverRenderingEngine)
    }
  }

  public Configure(callback: ConfigureCallback): void {
    callback(App.expressApp);
  }

  public get express(): express.Express {
    return App.expressApp;
  }
}
