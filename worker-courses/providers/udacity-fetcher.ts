import { CourseFetcher } from './fetcher-interface';
import { Course } from '../models/course';

import * as WebRequest from 'web-request';

export class UdacityFetcher implements CourseFetcher {

  async getAllCourses(): Promise<Course[]> {
    let url = 'https://www.udacity.com/public-api/v0/courses';
    let courseData = await WebRequest.json<any>(url);
    courseData = courseData.courses;
    let courses = [];
    for (let course of courseData) {
      let courseObject = new Course(course.title, course.subtitle, course.homepage)
      courses.push(courseObject);
    }
    return new Promise<Course[]>((resolve, reject) => {
      resolve(courses);
    });
  }

}
