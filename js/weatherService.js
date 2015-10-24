app.service('weatherService', function($http, $q) {

  this.getWeather = function(location) {
    var deferred = $q.defer();
    $http({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=APIKEY'
    }).then(function(response) {
      var parsedResponse = response.data;
      var arr = [];
      arr.push({
        name: parsedResponse.name,
        temp: Math.round(parsedResponse.main.temp * 10)/10,
        hiTemp: parsedResponse.main.temp_max,
        loTemp: parsedResponse.main.temp_min,
        conditions: parsedResponse.weather[0].main,
        description: parsedResponse.weather[0].description
      });
      if (parsedResponse.weather[0].main === "Clouds") {
        weatherBg = "cloudy";
      } else if (parsedResponse.weather[0].main === "Snow") {
        weatherBg = "fallingsnow";
      }
      else if (parsedResponse.weather[0].main === "Thunderstorm") {
        weatherBg = "thunderstorm";
      }
      else if (parsedResponse.weather[0].main === "Rain") {
        weatherBg = "rain";
      }
      else if (parsedResponse.weather[0].main === "Drizzle")  {
        weatherBg = "drizzle";
      }
      else if (parsedResponse.weather[0].main === "Extreme") {
        weatherBg = "extreme";
      }
      else if(parsedResponse.weather[0].main === "Clear") {
        weatherBg = "clear";
      }
      else {
        weatherBg = "additional";
      }
      city = parsedResponse.name;
      deferred.resolve(arr);
    });
    return deferred.promise;
  };
});
