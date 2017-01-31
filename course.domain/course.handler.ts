import { CourseUseCases } from  './course.use-case';
import { Request, Response } from "express";
export class CourseHandlers {

  constructor(private courseUseCases: CourseUseCases) {}

  public getCourses(request: Request, response: Response) {
    let courses = this.courseUseCases.getCourses();
    response.send(courses);
  }
}
