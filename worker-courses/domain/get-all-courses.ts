import { CourseProvider } from '../providers/provider-interface';
import { CourseRepository } from '../db/course-repository-interface';
import { Course } from '../models/course';

export class GetAllCoursesUseCase {

  constructor(private courseProvider: CourseProvider, private courseRepository: CourseRepository) {}

  getAllCourses(): Promise<any>  {
    return this.courseProvider
                  .getAllCourses()
                  .then(courses => {
                    courses.forEach(console.log);
                    this.courseRepository.update(courses);
                  });
  }

}
