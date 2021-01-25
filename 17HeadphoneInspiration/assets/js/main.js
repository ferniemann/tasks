function toggleMenu() {
    document.getElementById("mobile-menu").style = "display: block;"
    document.getElementById("toggleOpen").style = "display: none;"
    document.getElementById("toggleClose").style= "display: inline-block;"
}

function toggleMenuClose() {
    document.getElementById("mobile-menu").style = "display: none;"
    document.getElementById("toggleClose").style = "display: none;"
    document.getElementById("toggleOpen").style= "display: inline-block;"
}