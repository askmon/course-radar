import { CourseRouter } from "./server/presentation/modules/course/course.routes";
import { ViewsRouter } from "./views.router";
import * as  Express from "express";
const app =  Express();


// Configurations
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/app', Express.static('./views'));
app.use('/modules', Express.static('./node_modules'));

// Routes
app.use('/', ViewsRouter)
app.use('/api', CourseRouter);

app.listen(3000, function() {
  console.log("Listening to port 3000");
});

export { app }
