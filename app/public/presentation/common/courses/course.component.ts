import { Component, Input } from '@angular/core';
import { Course } from '../../../domain/entities/course.entity';

@Component({
  selector: 'course',
  template: `
    <h2>{{course.name}}</h2>
    <div>{{course.description}}</div>
    <a href="{{course.url}}">Saber mais...</a>

  `
})

export class CourseComponent {
  @Input()
  course: Course;
}
