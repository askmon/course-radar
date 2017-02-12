import { Router, Request, Response } from "express";

export const ViewsRouter = new Router()
                          .get('/', function(request: Request, response: Response) {
                            response.render('./presentation/home/home', {});
                            response.end();
                          });
