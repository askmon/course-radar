import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { CourseListComponent } from '../common/courses/course-list.component';
import { CourseComponent } from '../common/courses/course.component';
import { CourseService } from '../../domain/course.service';
import { CourseRepository } from '../../domain/course.contract';
import { CourseRepositoryServer } from '../../data/course.repository.server';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    CourseListComponent, CourseComponent
  ],
  providers: [
    CourseService,
    { provide: CourseRepository, useClass: CourseRepositoryServer }],
  bootstrap: [
    CourseListComponent
  ]
})

export class AppModule {}
