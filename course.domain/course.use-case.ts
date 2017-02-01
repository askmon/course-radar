import { Course } from "../entities/course";
import { CourseGateway } from "./course.contract";

export class CourseUseCases {

  constructor(private courseGateway: CourseGateway) {}

  getCourses(callback: (courses: Course[]) => void): void {
    this.courseGateway.getAllCourses(callback);
  }
}
