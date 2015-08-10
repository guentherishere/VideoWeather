# VideoWeather
<h3>Overview</h3>
This was a side project I made at DevMountain. This project was inspired by the <a href="https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en" target="new">Momentum</a> extension for Google Chrome. I enjoy the simplicity of the Momentum app. I wanted to take the simplicity of Momentum's design, but incorporate weather statistics with live video backgrounds. The screenshots do not reflect it, but this app plays a live video background related to the conditions in the city you enter. This project is server-less and includes heavy use of Angular Routing with a different view being used for each potential weather condition. I was able to successfully use a GET request to pull weather information for the city the user enters.

<h3>Lessons Learned</h3>
One of the major challenges I ran in to was taking the weather conditions determined from one controller and passing it on to the controller for the specific location. I was able to achieve this by using <a href="https://docs.angularjs.org/api/ngRoute/service/$routeParams" target="new">$routeParams</a>. This allowed me to bridge the city entered in to the other controller that determined the views/routing. Now that I'm familiar with this process I will not get hung up on something like this in the future.

<h3>Screenshots</h3>
<a href="http://i.imgur.com/QBewE6Z.jpg" target="new">Splash Page</a>
<br>
<a href="http://i.imgur.com/7dUp5jV.png" target="new">Thunderstorm Example</a>
<br>
<a href="http://i.imgur.com/GkelXZX.jpg" target="new">Clouds Example *Look at that temp!!!*</a>

<h3>Libraries/Frameworks/Resources Used</h3>
<a href="http://openweathermap.org/api" target="new">Weather API</a>
<br>
<a href="https://necolas.github.io/normalize.css/" target="new">Normalize.css</a>
<br>
<a href="https://angularjs.org/" target="new">AngularJS</a>
<br>
<a href="http://cdnjs.com/libraries/angular.js/" target="new">Angular Routes</a>
<br>
<a href="http://fortawesome.github.io/Font-Awesome/" target="new">Font Awesome</a>
