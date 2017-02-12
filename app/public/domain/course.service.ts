import { Injectable } from '@angular/core';

import { Course } from '../presentation/common/courses/view-model/course.view-model';
import { COURSES } from './courses-mock';

@Injectable()
export class CourseService {
  getCourses(): Promise<Course[]> {
    return Promise.resolve(COURSES);
  }
}
