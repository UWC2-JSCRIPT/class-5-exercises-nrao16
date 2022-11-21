// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const header = document.getElementById('weather-head');
header.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const sunny = document.querySelectorAll('.sun');
sunny.forEach(element => {
    element.style.color = 'orange';
});
// const sunny = document.getElementsByClassName('sun');
// for(let sun of sunny) {
//     sun.style.color = 'blue';
// }
// Change the class of the second <li> from to "sun" to "cloudy"

const li = document.querySelectorAll('li');
li[1].className = 'cloudy';