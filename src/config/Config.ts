import { IConfig } from '../types/IConfig'

export class Config implements IConfig {
  bodyParserEnabled: Boolean = true;
  bodyParserType?: string = "json";
  corsEnabled: Boolean = true;
  serverRenderingEnabled: Boolean = true;
  serverRenderingEngine: string = 'ejs';
  baseRoute: string = "";
  exposedHeaders: string | Array<string> = "";
}