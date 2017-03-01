import { Service, Inject } from "typedi";
import { Request, Response } from "express";
import { Course } from '../domain/course';
import { CourseUseCases } from  '../domain/course.use-case';

@Service()
export class CourseHandlers {
  @Inject()
  private courseUseCases: CourseUseCases

  public getCourses(request: Request, response: Response) {
    this.courseUseCases.getCourses().then((courses: Course[]) => {
      response.send(courses);
    }, (error: Error) => {
      response.send(error);
    });
  }
}
