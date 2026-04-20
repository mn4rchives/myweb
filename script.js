const image = document.getElementById("myImage");
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");

btnOn.addEventListener("click", function() {
    image.src = "./img/pic_bulbon.gif";
});

btnOff.addEventListener("click", function() {
    image.src = "./img/pic_bulboff.gif";
});