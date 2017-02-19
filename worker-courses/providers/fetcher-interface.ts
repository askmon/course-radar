import { Course } from "../models/course";

export interface CourseFetcher {
  getAllCourses(): Promise<Course[]>;
}
