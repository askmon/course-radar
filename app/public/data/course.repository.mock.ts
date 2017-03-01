import { Injectable } from '@angular/core';
import { CourseRepository } from "../domain/course.contract";
import { Course } from '../domain/entities/course.entity';
import { COURSES } from './courses-mock';

@Injectable()
export class CourseRepositoryMock extends CourseRepository {
  getCourses(): Promise<Course[]> {
    return Promise.resolve(COURSES);
  }
}
