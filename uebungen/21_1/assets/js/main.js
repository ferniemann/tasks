const size = document.getElementById('size')
const fonts = document.getElementById('fonts')
const text = document.getElementById('text')
const headline = document.getElementById('headline')
headline.innerHTML = text.value
headline.style.fontFamily = fonts.value;

function changeFontSize() {
    console.log(size.value);
    console.log(fonts.value);
    console.log(text.value);
    headline.innerHTML = text.value;
    headline.style.fontSize = size.value + "px";
    headline.style.fontFamily = fonts.value;
}

console.log(document.getElementById('red').value);
console.log(document.getElementById('green').value);
console.log(document.getElementById('blue').value);

let red = document.getElementById('red').value
let green = document.getElementById('green').value
let blue = document.getElementById('blue').value
let rgb = ("rgb("+red+","+green+","+blue+")");
console.log(rgb);
document.body.style.background = rgb;

function changeBackground() {
    console.log(document.getElementById('red').value)
    console.log(document.getElementById('green').value);
    console.log(document.getElementById('blue').value);
    let red = document.getElementById('red').value
    let green = document.getElementById('green').value
    let blue = document.getElementById('blue').value
    let rgb = ("rgb("+red+","+green+","+blue+")");
    console.log(rgb);
    document.body.style.background = rgb;
}