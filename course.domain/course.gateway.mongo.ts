import { Course } from "../entities/course";
import { CourseGateway } from  "./course.contract";
import { CourseRepository } from "../mongo-db.connector";

export class CourseMongoGateway implements CourseGateway {

  getAllCourses(callback: (courses: Course[]) => void): void {
    CourseRepository.get({}, (results: any[]): void => {
      let courses = new Array<Course>();
      for (let result of results) {
        courses.push(new Course(result["name"], result["description"], result["url"]));
      }
      callback(courses);
    });
  }

}
