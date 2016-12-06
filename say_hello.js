// Make a page
//
// Make a page to say hello to visitor and tell the year they were born. Unlike the last problem, the will supply their name and their age within route parameters. The URL will look like: /name/Manoush/age/30, and then it should display to the screen: Hello, Manoush! You were born in 1986.
//
// This time, use handlebars to render this page dynamically - you'll need to have a .hbs file inside of a views subdirectory, and you'll use the render() method of the response object.

const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/name/:name/age/:age", function(request, response) {
  var name = request.params.name;
  var age = request.params.age;
  var date = new Date();
  var current_year = date.getFullYear();
  var year_born = current_year - age;
  response.render("hello.hbs", {
    name: name,
    year_born: year_born
  });
});



app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
