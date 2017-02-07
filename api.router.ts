import { Router, Request, Response } from "express";
import { Injector } from "./injector";
import { CourseHandlers } from "./course.domain/course.handler";
import { CourseUseCases } from "./course.domain/course.use-case";
import { CourseMongoGateway } from "./course.domain/course.gateway.mongo";
import { CourseGateway } from "./course.domain/course.contract";


//Handler Build
let injector = new Injector([["CourseGateway", CourseMongoGateway], CourseHandlers, CourseUseCases]);
let courseHandlers = injector.get(CourseHandlers);


export const ApiRouter = new Router()
                          .get('/courses', function(request: Request, response: Response) {
                            courseHandlers.getCourses(request, response);
                          });
