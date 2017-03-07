import { Course } from '../models/course';

import * as WebRequest from 'web-request';

export class UdacityFetcher {

  async getAllCourses(): Promise<Course[]> {
    let url = 'https://www.udacity.com/public-api/v0/courses';
    let courseData = await WebRequest.json<any>(url);
    courseData = courseData.courses;
    let courses = courseData.map(course => new Course(course.title, course.subtitle, course.homepage));
    return courses;
  }

}
