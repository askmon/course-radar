import { Course } from '../entities/course';
import { CourseUseCases } from  './course.use-case';
import { Request, Response } from "express";
export class CourseHandlers {

  constructor(private courseUseCases: CourseUseCases) {}

  public getCourses(request: Request, response: Response) {
    this.courseUseCases.getCourses((courses: Course[]): void => {
      response.send(courses);
    });
  }
}
