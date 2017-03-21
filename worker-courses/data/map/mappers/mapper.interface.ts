import { Course } from "../../../models/course";

export interface CourseMapper {
  mapCourses(courses: any): Course[];
  getApiUrl(): string;
}
