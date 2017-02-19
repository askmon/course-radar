import { Course } from "../../domain/course";
import { CourseGateway } from "../../domain/course.contract";

const courses = [{
                  name: "Machine Learning",
                  description: "Learn the basic with Google",
                  url:  "https://br.udacity.com/course/intro-to-machine-learning--ud120/"
                },
                {
                  name: "ReactiveX",
                  description: "Assynchronous mande simple",
                  url: "https://egghead.io/technologies/rx"
                },
                {
                  name: "Continous Integration",
                  description:  "Continous Deploy taking your unseen bugs to another level",
                  url: "https://www.pluralsight.com/courses/continuous-integration"}];
export class CourseMockGateway implements CourseGateway {

  getAllCourses(): Promise<Course[]> {
      return new Promise<Course[]>((resolve, reject) => {
        resolve(courses);
      });
  }
}
