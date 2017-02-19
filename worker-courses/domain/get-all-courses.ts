import { UdacityFetcher } from '../providers/udacity-fetcher';

export class GetAllCoursesUseCase {

  constructor() {}

  async getAllCourses(): Promise<any>  {
    let udacityFetcher = new UdacityFetcher();
    
    return udacityFetcher.getAllCourses();
  }

}
