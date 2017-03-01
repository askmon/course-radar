import { UdacityFetcher } from '../providers/udacity-fetcher';
import { CourseRepository } from '../db/mongo-db.connector';
import { Course } from '../models/course';

export class GetAllCoursesUseCase {

  constructor() {}

  async getAllCourses(): Promise<any>  {
    let udacityFetcher = new UdacityFetcher();

    udacityFetcher.getAllCourses().then(function (courses: Course[]){
      return CourseRepository.update(courses);
  });
  }

}
