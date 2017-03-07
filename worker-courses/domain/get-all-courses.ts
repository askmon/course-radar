import { UdacityFetcher } from '../providers/udacity-fetcher';
import { CourseRepository } from '../db/mongo-db.connector';
import { Course } from '../models/course';

export class GetAllCoursesUseCase {

  constructor() {}

  getAllCourses(): Promise<any>  {
    let udacityFetcher = new UdacityFetcher();
    return udacityFetcher.getAllCourses().then(courses => CourseRepository.update(courses));
  }

}
