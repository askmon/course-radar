import { Injectable } from '@angular/core';

import { Course } from './course.view-model';
import { COURSES } from './courses-mock';

@Injectable()
export class CourseService {
  getCourses(): Promise<Course[]> {
    return Promise.resolve(COURSES);
  }
}
