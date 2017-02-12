import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseListComponent } from '../common/courses/course-list.component';
import { CourseComponent } from '../common/courses/course.component';
import { CourseService } from '../../domain/course.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CourseListComponent, CourseComponent
  ],
  providers: [CourseService],
  bootstrap: [
    CourseListComponent
  ]
})

export class AppModule {}
