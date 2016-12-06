// Hello World
//
// Make a hello world Express program that will display "Hello, world!" at the root URL: /

const express = require('express');
const app = express();

app.get("/", function(request, response) {
  response.send("Hello, world!");
});



app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
