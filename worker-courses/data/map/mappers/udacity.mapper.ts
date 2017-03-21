import { CourseMapper } from './mapper.interface';
import { Course } from "../../../models/course";

export class UdacityMapper implements CourseMapper {
  mapCourses(courses: any): Course[] {
    const courseData = courses.courses;
    return courseData.map(course => {
      return new Course(course.title,
                 course.subtitle,
                 course.homepage);
    });
  }

  getApiUrl(): string {
    return 'https://www.udacity.com/public-api/v0/courses';
  }
}
