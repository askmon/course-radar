import { Course } from '../../../domain/entities/course';
import { GetCoursesUseCase } from  '../../../domain/get-courses.use-case';
import { Request, Response } from "express";
import {Inject} from "typedi";

export class CourseController {

  @Inject()
   courseUseCases: GetCoursesUseCase;

  public getCourses(request: Request, response: Response) {
    this.courseUseCases.getCourses().then((courses: Course[]) => {
      response.send(courses);
    }, (error: Error) => {
      response.send(error);
    });
  }
}
