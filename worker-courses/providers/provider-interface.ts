import { Course } from "../models/course";

export interface CourseProvider {
  getAllCourses(): Promise<Course[]>;
}
