import { Course } from '../domain/course';
import { CourseUseCases } from  '../domain/course.use-case';
import { Request, Response } from "express";
import { Service } from 'typedi';

@Service()
export class CourseHandlers {

  constructor(private courseUseCases: CourseUseCases) {}

  public getCourses(request: Request, response: Response) {
    this.courseUseCases.getCourses().then((courses: Course[]) => {
      response.send(courses);
    }, (error: Error) => {
      response.send(error);
    });
  }
}
