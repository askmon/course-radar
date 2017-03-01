import { Course } from './entities/course.entity';

export abstract class CourseRepository {
  abstract getCourses(): Promise<Course[]>;
}
