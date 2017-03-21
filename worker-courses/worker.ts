import * as scheduler from 'node-schedule';
import { CourseApisProvider } from './providers/course-api-providers';
import { CourseMongoRepository } from './data/db/mongo-db.connector';
import { GetCoursesUseCase } from './domain/get-courses.use-case';
import { CourseMapDatasource } from './data/map/course.map.datasource';

var getAllCoursesUseCase = new GetCoursesUseCase(new CourseApisProvider(), new CourseMongoRepository(), new CourseMapDatasource());

let schedule = scheduler.scheduleJob('*/30 * * * * *', () =>
{
  console.log("Starting to get Courses!");
  getAllCoursesUseCase.getAndSaveAllCourses().then(function(courses){
    console.log(courses);
    console.log("Finished to get Courses!");
  });
});
