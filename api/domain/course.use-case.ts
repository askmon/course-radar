import { Course } from "./course";
import { CourseGateway } from "./course.contract";

export class CourseUseCases {

  constructor(private courseGateway: CourseGateway) {}

  getCourses(): Promise<Course[]> {
    return this.courseGateway.getAllCourses();
  }
}