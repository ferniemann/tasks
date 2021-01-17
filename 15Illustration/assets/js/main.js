function darkMode() {
    document.getElementById("darkswitch").style.display = "none";
    document.getElementById("lightswitch").style.display = "inline-block";
    document.getElementById("darknav").style.display = "block";
    document.getElementById("lightnav").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("membership").style.backgroundColor = "#111";
    document.getElementById("img1").style.backgroundImage = "url(./assets/img/darkmode-img1.png)";
    document.getElementById("img2").style.backgroundImage = "url(./assets/img/darkmode-img2.png)";
    document.getElementById("img3").style.backgroundImage = "url(./assets/img/darkmode-img3.png)";
    document.getElementById("img4").style.backgroundImage = "url(./assets/img/darkmode-img4.png)";
    document.getElementById("img5").style.backgroundImage = "url(./assets/img/darkmode-img5.png)";
    document.getElementById("img6").style.backgroundImage = "url(./assets/img/darkmode-img6.png)";
    document.getElementById("subscribe").style.color = "white";
}

function lightMode() {
    document.getElementById("darkswitch").style.display = "inline-block";
    document.getElementById("lightswitch").style.display = "none";
    document.getElementById("lightnav").style.display = "block";
    document.getElementById("darknav").style.display = "none";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#202020";
    document.getElementById("membership").style.backgroundColor = "#f5fbfe";
    document.getElementById("img1").style.backgroundImage = 'url(./assets/img/illustration1.gif)';
    document.getElementById("img2").style.backgroundImage = "url(./assets/img/illustration2.png)";
    document.getElementById("img3").style.backgroundImage = "url(./assets/img/illustration3.png)";
    document.getElementById("img4").style.backgroundImage = "url(./assets/img/illustration4.png)";
    document.getElementById("img5").style.backgroundImage = "url(./assets/img/illustration5.png)";
    document.getElementById("img6").style.backgroundImage = "url(./assets/img/illustration6.png)";
    document.getElementById("membership").style.backgroundColor = "#f5fbfe";
    document.getElementById("subscribe").style.color = "#202020";
}