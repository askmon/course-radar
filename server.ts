import { CourseHandlers } from "./course.domain/course.handler";
import { CourseUseCases } from "./course.domain/course.use-case";
import { CourseMockGateway } from "./course.domain/course.gateway.mock";
import * as  Express from "express";
const app =  Express();

// Handler Build
let courseGateway = new CourseMockGateway();
let courseUseCases = new CourseUseCases(courseGateway);
let courseHandlers = new CourseHandlers(courseUseCases);

// Configurations
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/app', Express.static('./views'));
app.use('/modules', Express.static('./node_modules'));

// Routes
app.get('/', (req, res) => {
  res.render('home', {});
  res.end();
});

app.get('/courses', function(request: Express.Request, response: Express.Response) {
  courseHandlers.getCourses(request, response);
});

app.listen(3000, function() {
  console.log("Listening to port 3000");
});

export { app }
