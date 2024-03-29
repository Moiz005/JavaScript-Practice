
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonclicked = this.innerHTML;
        buttonAnimation(buttonclicked);
        switch(buttonclicked) {
            case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            
            case 'k':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            default:
                console.log(buttonclicked);
        }
        
    });
}

document.addEventListener('keydown',function(e){
    var buttonclicked = e.key;
    buttonAnimation(buttonclicked);
        switch(buttonclicked) {
            case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            
            case 'k':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            default:
                console.log(buttonclicked);
        }
});

function buttonAnimation(keypressed){
    var activekey = document.querySelector("."+keypressed);
    activekey.classList.add("pressed");

    setTimeout(() => {
        activekey.classList.remove("pressed");
    }, 100);
}
