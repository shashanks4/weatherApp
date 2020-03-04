var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var sunrise=document.querySelector('.rise');
var pressure=document.querySelector('.pressure');
var sset=document.querySelector('.sunset');
var button= document.querySelector('.submit');
var country=document.querySelector('.country');
//var wind= document.querySelector('wind');
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
 tt= tempValue-273.15
 var windValue=data['wind']['speed']
  var nameValue = data['name'];
  var conValue=data['sys']['country'];
  var descValue = data['weather'][0]['description'];
  var sunValue=data['sys']['sunrise'];
  var pressValue=data['main']['pressure'];
  var pp=pressValue/1000
  var ssetValue=data['sys']['sunset'];
  main.innerHTML = nameValue;
  sunrise.innerHTML="Sunrise - "+sunValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp(celsius)- "+tt;
  country.innerHTML="Country - "+conValue;
  sset.innerHTML="Sunset - "+ssetValue;
  pressure.innerHTML="Pressure -"+pp;
  //wind.innerHTML="Wind -"+windValue;
  input.value ="";

}).catch(err => alert("Wrong city name!"));
})
