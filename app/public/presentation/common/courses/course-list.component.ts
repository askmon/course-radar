import { Component, OnInit } from '@angular/core';
import { Course } from '../../../domain/entities/course.entity';
import { CourseService } from '../../../domain/course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[];
  success: boolean;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    //TODO Add proper error handling here
    this.courseService.getCourses()
                      .then(courses => {
                        this.courses = courses;
                        if (this.courses[0].name != undefined) this.success = true;
                        else this.success = false;
                      })
                      .catch((error: Error) => {
                        this.success = false;
                      });
  }
}
