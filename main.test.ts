import { Course } from "./entities/course";
import { CourseUseCases } from "./course.domain/course.use-case";
import { CourseMockGateway } from "./course.domain/course.gateway.mock";

let courseUseCases = new CourseUseCases(new CourseMockGateway());


let courses = courseUseCases.getCourses();
for (let course of courses) {
  console.log("Course name: " + course.name);
  console.log("Course description: " + course.description);
  console.log("Course url: " + course.url);
}
