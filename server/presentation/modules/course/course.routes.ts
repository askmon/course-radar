import { Router, Request, Response } from "express";
import { Injector } from "../../../utils/injector";
import { CourseController } from "./course.controller";
import { GetCoursesUseCase } from "../../../domain/get-courses.use-case";
import { CourseMongoGateway } from "../../../resources/course.gateway.mongo";
import { CourseGateway } from "../../../domain/get-courses.contract";


//Handler Build
let injector = new Injector([["CourseGateway", CourseMongoGateway], CourseController, GetCoursesUseCase]);
let courseHandlers = injector.get(CourseController);


export const CourseRouter = new Router()
                          .get('/courses', function(request: Request, response: Response) {
                            courseHandlers.getCourses(request, response);
                          });
