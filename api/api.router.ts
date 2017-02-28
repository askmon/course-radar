import "es6-shim";
import "reflect-metadata";
import { Router, Request, Response } from "express";
import { Container } from "typedi";
//import { Injector } from "../injector";
import { CourseHandlers } from "./presentation/course.handler";
import { CourseUseCases } from "./domain/course.use-case";
import { CourseMongoGateway } from "./data/gateways/course.gateway.mongo";
import { CourseGateway } from "./domain/course.contract";
import "./data/gateways/course.gateway.mock";



//Handler Build
//let injector = new Injector([["CourseGateway", CourseMongoGateway], CourseHandlers, CourseUseCases]);
//let courseHandlers = injector.get(CourseHandlers);
Container.set("course.gateway", Container.get(CourseMongoGateway));
let courseHandlers = Container.get(CourseHandlers);

export const ApiRouter = new Router()
                          .get('/courses', function(request: Request, response: Response) {
                            courseHandlers.getCourses(request, response);
                          });
