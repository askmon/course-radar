import { Inject, Service } from "typedi";
import { Course } from "./course";
import { CourseGateway } from "./course.contract";
import "../data/gateways/course.gateway.mongo";

@Service()
export class CourseUseCases {

  constructor(@Inject("course.gateway") private courseGateway: CourseGateway) {}

  async getCourses(): Promise<Course[]> {
    return this.courseGateway.getAllCourses();
  }
}
