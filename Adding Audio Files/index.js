var audio = new Audio("./sounds/tom-1.mp3");

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // audio.play();
        this.style.color = "white";
    });
}