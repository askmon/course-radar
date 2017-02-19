import { CourseFetcher } from './fetcher-interface';
import { Course } from '../models/course';

import * as WebRequest from 'web-request';

export class UdacityFetcher implements CourseFetcher {

  async getAllCourses(): Promise<Course[]> {
    let url = 'https://www.udacity.com/public-api/v0/courses';
    let courseData = await WebRequest.json<any>(url);
    console.log(courseData);
    return null;
  }

}
