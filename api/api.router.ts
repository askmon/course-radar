import "es6-shim";
import "reflect-metadata";
import { Router, Request, Response } from "express";
import { Container } from "typedi";
//import { Injector } from "../injector";
import { CourseHandlers } from "./presentation/course.handler";
import { CourseUseCases } from "./domain/course.use-case";
import { CourseMongoGateway } from "./data/gateways/course.gateway.mongo";
import { CourseGateway } from "./domain/course.contract";

//Handler Build

export class ApiRouter {
  static getRouter(): Router {
    Container.set("course.gateway", Container.get(CourseMongoGateway));
    let courseHandlers = Container.get(CourseHandlers);

    const ApiRouter = new Router();
    ApiRouter.get('/courses', (request: Request, response: Response) => courseHandlers.getCourses(request, response));
    return ApiRouter;
  }
}
