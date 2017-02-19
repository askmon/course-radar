import { Injectable } from '@angular/core';
import { CourseService } from "./course.service";
import { Course } from '../presentation/common/courses/view-model/course.view-model';
import { COURSES } from './courses-mock';

@Injectable()
export class CourseServiceMock extends CourseService {
  getCourses(): Promise<Course[]> {
    return Promise.resolve(COURSES);
  }
}
