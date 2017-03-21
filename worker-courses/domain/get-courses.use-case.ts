import { CourseProvider } from '../providers/provider-interface';
import { CourseRepository } from '../data/db/course-repository-interface';
import { Course } from '../models/course';
import { CourseMapDatasource } from '../data/map/course.map.datasource'
import * as WebRequest from 'web-request';

export class GetCoursesUseCase {

  constructor(private courseProvider: CourseProvider, private courseRepository: CourseRepository, private courseMapDatasource: CourseMapDatasource) {}

  async getAndSaveAllCourses(): Promise<any>  {
    let courseMaps = this.courseMapDatasource.getCourseMaps();
    let elements = [];
    for (let map of courseMaps){
      elements.push(this.downloadAndMapCourses(map));
    }
    return Promise.all(elements).then(function(res){
    });
  };

  private async downloadAndMapCourses(map) {
    console.log(map);
    let courseData = await WebRequest.json<any[]>(map.getApiUrl());
    let courses = map.mapCourses(courseData);
    return courses;
  }
}
