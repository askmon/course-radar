import { CourseMapper } from './mapper.interface';
import { Course } from "../../../models/course";

export class CourseraMapper implements CourseMapper {

  mapCourses(courses: any): Course[] {
    console.log('AEHOOO')
    return courses.map(course => {
      return new Course(course.name,
                        course.short_description,
                        this.validateLink(course.courses) ? course.courses[0].home_link : "");
    });
  }

  getApiUrl(): string {
    return 'https://www.coursera.org/maestro/api/topic/list?full=1';
  }

  private validateLink(courses: any[]): boolean {
    return courses != undefined && courses.length > 0;
  }
}
