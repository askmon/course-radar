import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseListComponent } from './course-list.component';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

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
