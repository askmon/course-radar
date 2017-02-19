import { Router, Request, Response } from "express";
import { Injector } from "../injector";
import { CourseHandlers } from "./presentation/course.handler";
import { CourseUseCases } from "./domain/course.use-case";
import { CourseMongoGateway } from "./data/gateways/course.gateway.mongo";
import { CourseGateway } from "./domain/course.contract";

import { Container } from 'typedi';

//Handler Build
let courseHandlers = Container.get(CourseHandlers);


export const ApiRouter = new Router()
                          .get('/courses', function(request: Request, response: Response) {
                            courseHandlers.getCourses(request, response);
                          });
