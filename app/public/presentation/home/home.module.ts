import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseListComponent } from '../common/courses/course-list.component';
import { CourseComponent } from '../common/courses/course.component';
import { CourseService } from '../../domain/course.service';
import { CourseRepository } from '../../domain/course.contract';
import { CourseRepositoryMock } from '../../data/course.repository.mock';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CourseListComponent, CourseComponent
  ],
  providers: [CourseService, { provide: CourseRepository, useClass: CourseRepositoryMock }],
  bootstrap: [
    CourseListComponent
  ]
})

export class AppModule {}
