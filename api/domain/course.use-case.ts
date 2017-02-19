import { Course } from "./course";
import { CourseGateway } from "./course.contract";
import { CourseMongoGateway } from '../data/gateways/course.gateway.mongo';

import { Service, Inject } from 'typedi';

@Service()
export class CourseUseCases {

  constructor(private courseGateway: CourseMongoGateway) {}

  getCourses(): Promise<Course[]> {
    return this.courseGateway.getAllCourses();
  }
}
