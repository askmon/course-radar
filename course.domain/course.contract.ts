import { Course } from "../entities/course";

export interface CourseGateway {
  getAllCourses(callback: (courses: Course[]) => void): void;
}
