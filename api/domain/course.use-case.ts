import { Course } from "./course";
import { CourseGateway } from "./course.contract";
import { CourseMongoGateway } from '../data/gateways/course.gateway.mongo';

import { Service, Inject } from 'typedi';

@Service()
export class CourseUseCases {

  constructor(@Inject("mongo.gateway") private courseGateway: CourseGateway) {}

  getCourses(): Promise<Course[]> {
    return this.courseGateway.getAllCourses();
  }
}
