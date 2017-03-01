import { Injectable } from '@angular/core';
import { Course } from './entities/course.entity';
import { CourseRepository } from './course.contract';

@Injectable()
export class CourseService {

  constructor(private courseRepository: CourseRepository) {};

  getCourses(): Promise<Course[]> {
    return this.courseRepository.getCourses();
  };
}
