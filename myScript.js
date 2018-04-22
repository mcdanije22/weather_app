var lat ="lat=40.8041667";
var long = "lon=-73.9436111";
var currentWeather;
/*function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById(x).innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    lat =  "lat=" + position.coords.latitude;
    long =  "lon=" + position.coords.longitude;
}
window.onload = getLocation;
 */
function getData() {
  var xhr = new XMLHttpRequest();

xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  currentWeather = Math.round(data.main.temp);
    document.getElementById("temp").innerHTML = currentWeather + " &#8457;";
    document.getElementById("con").innerHTML = data.weather[0].main;
    document.getElementById("name").innerHTML = data.name +", "+ data.sys.country;
    //document.getElementById("test").innerHTML = data.weather[0].icon;
    var icon =  data.weather[0].icon;
    var link = "http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("icon").src = link;
  //  document.getElementById("y").innerHTML = xhr.responseText;
  console.log(xhr.responseText);
}
var api = "https://api.openweathermap.org/data/2.5/weather?";
var apiKey ="&APPID=630da7d36f6e05d30bc4825f7260ba94";
var units = "&units=imperial";

var url = api + lat + "&" + long + apiKey + units;
xhr.open("GET",url, true);
xhr.send();
}
window.onload = getData;
function show () {
currentWeather = Math.round((currentWeather - 32) * 5/9);
document.getElementById("temp").innerHTML = currentWeather + "&#8451;";
}
//var today = new Date();
//document.getElementById('time').innerHTML=today;
