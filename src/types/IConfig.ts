export interface IConfig {
  bodyParserEnabled?: Boolean;
  bodyParserType?: string;
  corsEnabled?: Boolean;
  serverRenderingEnabled?: Boolean;
  serverRenderingEngine?: string;
  baseRoute?: string;
  exposedHeaders?: string | Array<string>;
}