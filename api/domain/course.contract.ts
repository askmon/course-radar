import { Course } from "./course";

export interface CourseGateway {
  getAllCourses(): Promise<Course[]>;
}
