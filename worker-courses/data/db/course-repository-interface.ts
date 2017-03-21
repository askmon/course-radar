import { Course } from '../../models/course';

export interface CourseRepository {
  update(courses: Array<Course>): Promise<any[]>;
}
