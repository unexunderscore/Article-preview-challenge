// Counter to close opt. "toggle"
let count = 0;

// Get the share img
var share = document.querySelector(".share img");
var share2 = document.querySelector(".share2 img");

var icon = document.querySelector(".icon-share");
var icon2 = document.getElementById("icon2");
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// When the user clicks the button, open the modal or close it.
btn.onclick = function() {
    if(count<1){
        modal.style.display = "block";
        share.style.padding = "0.8rem";
        share.style.backgroundColor = "hsl(212, 23%, 69%)";
        icon.src= "./images/share-white.svg";
        count = 1;
    } else {
        modal.style.display = "none";
        share.style.padding = "0.5rem";
        share.style.backgroundColor = "hs l(210, 46%, 95%)";
        icon.src= "./images/icon-share.svg"; 
        count = 0;
    }
}

btn2.onclick = function() {
    if(count<1){
        modal2.style.display = "block";
        btn2.style.bottom = "18px"
        btn2.style.width = "40px";
        btn2.style.height = "40px";
        btn2.style.backgroundColor = "hsl(212, 23%, 69%)";
        icon2.src= "./images/share-white.svg";
        count = 1;
    } else {
        modal2.style.display = "none";
        btn2.style.bottom = "28px"
        btn2.style.width = "30px";
        btn2.style.height = "30px";

        btn2.style.backgroundColor = "hsl(210, 46%, 95%)";
        icon2.src= "./images/icon-share.svg";
        count = 0;
    }
}

