// Tell the year you were born
//
// Make an express program that will display the year you were born when you report your age in a query parameter. When you type in http://localhost:3000/year?age=32 into the address bar of your browser, for example, it will display You were born in 1984.

const express = require("express");
const app = express();

app.get("/year", function(request, response) {
  var age = request.query.age;
  var date = new Date();
  var current_year = date.getFullYear();
  var year_born = current_year - age;
  response.send("You were born in " + year_born);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
