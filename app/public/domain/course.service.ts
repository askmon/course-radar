import { Course } from '../presentation/common/courses/view-model/course.view-model';

export abstract class CourseService {
  abstract getCourses(): Promise<Course[]>;
}
