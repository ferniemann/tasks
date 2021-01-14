// Function erstellen
function changeColors1() {

    // Hintergrund des body ändern
    document.body.style.backgroundColor = "#2f4858"

    // Hintergrund der Headline ändern
    document.getElementById('headline').style.color = "#f6ae2d"

    // Weißer Rand um ausgewähltes Farbschema
    document.getElementById('ball1').style.borderColor = "white"

    // Andere Farbschemen mit nicht-sichtbarem Rand
    document.getElementById('ball2').style.borderColor = "transparent"
    document.getElementById('ball3').style.borderColor = "transparent"
    document.getElementById('ball4').style.borderColor = "transparent"
}

function changeColors2() {
    document.body.style.backgroundColor = "#c5d86d"
    document.getElementById('headline').style.color = "#710627"
    document.getElementById('ball1').style.borderColor = "transparent"
    document.getElementById('ball2').style.borderColor = "white"
    document.getElementById('ball3').style.borderColor = "transparent"
    document.getElementById('ball4').style.borderColor = "transparent"
}

function changeColors3() {
    document.body.style.backgroundColor = "#86626e"
    document.getElementById('headline').style.color = "#defffc"
    document.getElementById('ball1').style.borderColor = "transparent"
    document.getElementById('ball2').style.borderColor = "transparent"
    document.getElementById('ball3').style.borderColor = "white"
    document.getElementById('ball4').style.borderColor = "transparent"
}

function changeColors4() {
    document.body.style.backgroundColor = "#03312e"
    document.getElementById('headline').style.color = "#00b9ae"
    document.getElementById('ball1').style.borderColor = "transparent"
    document.getElementById('ball2').style.borderColor = "transparent"
    document.getElementById('ball3').style.borderColor = "transparent"
    document.getElementById('ball4').style.borderColor = "white"
}