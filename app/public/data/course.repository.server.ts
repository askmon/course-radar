import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CourseRepository } from "../domain/course.contract";
import { Course } from '../domain/entities/course.entity';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseRepositoryServer extends CourseRepository {

  private coursesUrl = 'api/courses';

  constructor(private http: Http) {
    super();
  }

  getCourses(): Promise<Course[]> {
    return this.http.get(this.coursesUrl)
                    .toPromise()
                    .then(response => response.json() as Course[]);
  }
}
