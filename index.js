const request = require("request");
const argv = require("yargs").argv;

let apiKey = "7544db96b0f129d2f80d356fb7c5de00";
let city = argv.c || "London";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    console.log("body:", body);
  }
});
