import { Course } from "./entities/course";
import { CourseGateway } from "./get-courses.contract";

export class GetCoursesUseCase {

  constructor(private courseGateway: CourseGateway) {}

  getCourses(): Promise<Course[]> {
    return this.courseGateway.getAllCourses();
  }
}
