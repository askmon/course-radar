import { Course } from "./entities/course";

export interface CourseGateway {
  getAllCourses(): Promise<Course[]>;
}
