import * as  express from "express";
const app = express();

// Configurations
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/app', express.static('./views'));
app.use('/modules', express.static('./node_modules'));

// Routes
app.get('/', (req, res) => {
  res.render('home', {});
  res.end();
});

app.listen(3000, function() {
  console.log("Listening to port 3000");
});

export { app }
