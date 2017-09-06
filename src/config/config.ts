import { IConfig } from '../types/IConfig'

export class Config implements IConfig {
  bodyParserEnabled: Boolean = true;
  corsEnabled: Boolean = true;

  serverRenderingEnabled: Boolean = true;
  serverRenderingEngine: string = 'ejs';
  baseRoute: string = "";
}