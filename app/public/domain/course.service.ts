import { Course } from './entities/course.entity';

export abstract class CourseService {
  abstract getCourses(): Promise<Course[]>;
}
