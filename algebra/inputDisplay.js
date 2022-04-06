var recent = document.querySelector("ol");
var form = document.querySelector("form");
var textBox = document.getElementById('text');

function answer(equation, li) {
    equation = textBox.value;
    li = document.createElement('li');
    li.innerText =  equation;
    recent.appendChild(li);
    textBox.value = ''
}

