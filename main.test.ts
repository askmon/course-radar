import { CourseMongoGateway } from './course.domain/course.gateway.mongo';
import { Course } from "./entities/course";
//import { CourseUseCases } from "./course.domain/course.use-case";
//import { CourseMockGateway } from "./course.domain/course.gateway.mock";

//let courseUseCases = new CourseUseCases(new CourseMockGateway());

//courseUseCases.getCourses((courses: Course[]): void => {
  //console.log(courses)
//});

(new CourseMongoGateway()).getAllCourses((courses: Course[]): void => {
  console.log(courses);
});
