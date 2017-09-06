import "reflect-metadata";

import { Inject, Service } from "typedi";
import { Config } from "./config/config";
import { Request, Response } from "express";
import { Http } from "./interceptors/Route";
import { App } from "./app";

export {
  App,
  Http,
  Request,
  Response,
  Config,
  Service,
  Inject
}