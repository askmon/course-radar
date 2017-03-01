import * as scheduler from 'node-schedule';

import { GetAllCoursesUseCase } from './domain/get-all-courses'

var getAllCoursesUseCase = new GetAllCoursesUseCase();

let schedule = scheduler.scheduleJob('* * * * *', () =>
{
  getAllCoursesUseCase.getAllCourses().then(function(courses){
    console.log(courses);
  });
});
