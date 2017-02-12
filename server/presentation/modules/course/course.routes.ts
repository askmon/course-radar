import { Router, Request, Response } from "express";
import {Container} from "typedi";
import { CourseController } from "./course.controller";
import { GetCoursesUseCase } from "../../../domain/get-courses.use-case";
import { CourseMongoGateway } from "../../../resources/course.gateway.mongo";
import { CourseGateway } from "../../../domain/get-courses.contract";

//Handler Build
let courseController = Container.get(CourseController);


export const CourseRouter = new Router()
                          .get('/courses', function(request: Request, response: Response) {
                            courseController.getCourses(request, response);
                          });
