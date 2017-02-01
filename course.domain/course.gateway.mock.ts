import { Course } from "../entities/course";
import { CourseGateway } from "./course.contract";

const courses = [new Course("Machine Learning",
                          "Learn the basic with Google",
                          "https://br.udacity.com/course/intro-to-machine-learning--ud120/"),
                new Course("ReactiveX",
                          "Assynchronous made simple",
                          "https://egghead.io/technologies/rx"),
                new Course("Continous Integration",
                          "Continous Deploy taking your unseen bugs to another level",
                          "https://www.pluralsight.com/courses/continuous-integration")];
export class CourseMockGateway implements CourseGateway {

  getAllCourses(callback: (courses: Course[]) => void): void {
    callback(courses);
  }
}
