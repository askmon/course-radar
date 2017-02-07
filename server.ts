import { ApiRouter } from "./api.router";
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
app.use('/api', ApiRouter);

app.listen(3000, function() {
  console.log("Listening to port 3000");
});

export { app }
