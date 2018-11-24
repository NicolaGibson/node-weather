let request = require("request");

let apiKey = "7544db96b0f129d2f80d356fb7c5de00";
let city = "London";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    console.log("body:", body);
  }
});
