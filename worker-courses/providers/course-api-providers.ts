import { CourseProvider } from './provider-interface';
import { UdacityFetcher } from './udacity-fetcher';
import { CourseraFetcher } from './coursera-fetcher';
import { Course } from "../models/course";

export class CourseApisProvider implements CourseProvider {

  private udacityFetcher: UdacityFetcher;
  private courseraFetcher: CourseraFetcher;

  constructor() {
    this.udacityFetcher = new UdacityFetcher();
    this.courseraFetcher = new CourseraFetcher();
  }

  async getAllCourses(): Promise<Course[]> {
    console.log("Starting HTTP Request");
    let [udacityCourses, courseraCourses] = await Promise.all(
                                                    [this.udacityFetcher.getAllCourses(),
                                                    this.courseraFetcher.getAllCourses()]);

    return udacityCourses.concat(courseraCourses);
  }
}
