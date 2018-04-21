var lat ="lat=40.8041667";
var long = "lon=-73.9436111";
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
    document.getElementById("x").innerHTML = data.main.temp;
      document.getElementById("z").innerHTML = data.weather[0].description;
    document.getElementById("y").innerHTML = xhr.responseText;
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
//var today = new Date();
//document.getElementById('time').innerHTML=today;
