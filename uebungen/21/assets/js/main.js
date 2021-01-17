// Function erstellen
function changeColors1() {

    // Hintergrund des body ändern
    document.body.style.backgroundColor = "#2f4858"

    // Hintergrund der Headline ändern
    document.getElementById('headline').style.color = "#f6ae2d"

    // Weißer Rand um ausgewähltes Farbschema
    document.getElementById('circle1').style.borderColor = "white"

    // Andere Farbschemen mit nicht-sichtbarem Rand ausstatten
    document.getElementById('circle2').style.borderColor = "transparent"
    document.getElementById('circle3').style.borderColor = "transparent"
    document.getElementById('circle4').style.borderColor = "transparent"
}

function changeColors2() {
    document.body.style.backgroundColor = "#c5d86d"
    document.getElementById('headline').style.color = "#710627"
    document.getElementById('circle2').style.borderColor = "white"
    document.getElementById('circle1').style.borderColor = "transparent"
    document.getElementById('circle3').style.borderColor = "transparent"
    document.getElementById('circle4').style.borderColor = "transparent"
}

function changeColors3() {
    document.body.style.backgroundColor = "#86626e"
    document.getElementById('headline').style.color = "#defffc"
    document.getElementById('circle3').style.borderColor = "white"
    document.getElementById('circle1').style.borderColor = "transparent"
    document.getElementById('circle2').style.borderColor = "transparent"
    document.getElementById('circle4').style.borderColor = "transparent"
}

function changeColors4() {
    document.body.style.backgroundColor = "#03312e"
    document.getElementById('headline').style.color = "#00b9ae"
    document.p.style.color = "#00b9ae"
    document.getElementById('circle4').style.borderColor = "white"
    document.getElementById('circle1').style.borderColor = "transparent"
    document.getElementById('circle2').style.borderColor = "transparent"
    document.getElementById('circle3').style.borderColor = "transparent"
}