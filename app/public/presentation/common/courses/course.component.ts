import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/entities/course.entity';

@Component({
  selector: 'course',
  template: './course.component.html'
})

export class CourseComponent {
  @Input()
  course: Course;
}
