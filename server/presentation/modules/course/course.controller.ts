import { Course } from '../../../domain/entities/course';
import { GetCoursesUseCase } from  '../../../domain/get-courses.use-case';
import { Request, Response } from "express";
export class CourseController {

  constructor(private courseUseCases: GetCoursesUseCase) {}

  public getCourses(request: Request, response: Response) {
    this.courseUseCases.getCourses().then((courses: Course[]) => {
      response.send(courses);
    }, (error: Error) => {
      response.send(error);
    });
  }
}
