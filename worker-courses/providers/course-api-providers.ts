import { CourseProvider } from './provider-interface';
import { UdacityFetcher } from './udacity-fetcher';
import { Course } from "../models/course";

export class CourseApisProvider implements CourseProvider {

  private udacityFetcher: UdacityFetcher;

  constructor() {
    this.udacityFetcher = new UdacityFetcher();
  }

  async getAllCourses(): Promise<Course[]> {
    return this.udacityFetcher.getAllCourses();
  }
}
