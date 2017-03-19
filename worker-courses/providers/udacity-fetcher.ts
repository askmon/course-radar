import { Course } from '../models/course';

import * as WebRequest from 'web-request';

export class UdacityFetcher {

  async getAllCourses(): Promise<Course[]> {
    let url = 'https://www.udacity.com/public-api/v0/courses';
    console.info("Starting Udacity Request!");
    let courseData = await WebRequest.json<any>(url);
    console.info("Finished Udacity Request!");
    courseData = courseData.courses;
    console.info("Starting Udacity Map!");
    let courses = courseData.map(course => new Course(course.title, course.subtitle, course.homepage));
    console.info("Finished Udacity Map!");
    return courses;
  }

}
