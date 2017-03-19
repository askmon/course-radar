import "reflect-metadata";

import { ApiRouter } from "./api/api.router";
import { AppRouter } from "./app/app.router";
import * as  Express from "express";
const app =  Express();

import { Container } from "typedi";
export class Server {

  private app: Express;

  constructor() {
    this.app = Express();
  }

  start(port: String): void {
    this.setViews();
    this.setRoutes();
    app.listen(port, function() {
      console.log("Listening to port ${port}");
    });
  }

  setViews(): void {
    app.set('views', './app/public');
    app.set('view engine', 'ejs');
    app.use('/app', Express.static('./app/public'));
    app.use('/modules', Express.static('./node_modules'));
  }

  setRoutes(): void {
    app.use('/', AppRouter);
    app.use('/api', ApiRouter.getRouter());
  }

}
