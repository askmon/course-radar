import * as scheduler from 'node-schedule';
import { CourseApisProvider } from './providers/course-api-providers';
import { CourseMongoRepository } from './db/mongo-db.connector';
import { GetAllCoursesUseCase } from './domain/get-all-courses'

var getAllCoursesUseCase = new GetAllCoursesUseCase(new CourseApisProvider(), new CourseMongoRepository());

let schedule = scheduler.scheduleJob('* * * * *', () =>
{
  console.log("Starting to get Courses!");
  getAllCoursesUseCase.getAllCourses().then(function(courses){
    console.log(courses);
    console.log("Finished to get Courses!");
  });
});
