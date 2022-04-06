var string = "Kalvin's Math Class";
var array = string.split('');
var len = array.length;
function randomColor(){
var heading = document.createElement('h1');
for(var i = 0; i < len; ++i) {
    var span = document.createElement("span");
    span.setAttribute("class", "spanify");
    span.textContent = array[i];
    var randomColour = Math.floor(Math.random()*(256**3)).toString(16);
    span.style.color = "#" + randomColour;
    heading.appendChild(span);
}
    document.body.appendChild(heading)
}
window.onload = randomColor();
