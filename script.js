// Counter to close opt. "toggle"
let count = 0;

// Get the share img
var share = document.querySelector(".share img");
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal or close it.
btn.onclick = function() {
    if(count<1){
        modal.style.display = "block";
        share.style.padding = "0.8rem";
        share.style.backgroundColor = "hsl(212, 23%, 69%)";
        count = 1;
    } else {
        modal.style.display = "none";
        share.style.padding = "0.5rem";
        share.style.backgroundColor = "hsl(210, 46%, 95%)";
        share.style.color = "white";
        count = 0;
    }
}

