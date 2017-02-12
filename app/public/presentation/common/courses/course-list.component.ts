import { Component, OnInit } from '@angular/core';
import { Course } from './view-model/course.view-model';
import { CourseService } from '../../../domain/course.service';

@Component({
  selector: 'course-list',
  template: `
    <h1>My Courses</h1>
    <ul>
      <li *ngFor="let course of courses">
        <course [course]="course"></course>
      </li>
    </ul>
  `
})

export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    //this.courses = COURSES;
    this.courseService.getCourses().then(courses => this.courses = courses);
  }
}
