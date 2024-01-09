var num = Math.random();
num = num*6;
num = Math.floor(num) + 1;
if(num === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
if(num === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
if(num === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
if(num === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
if(num === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
if(num === 6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

var num1 = Math.random();
num1 = num1*6;
num1 = Math.floor(num1) + 1;
if(num1 === 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if(num1 === 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
if(num1 === 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
if(num1 === 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
if(num1 === 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
if(num1 === 6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}

if(num > num1){
    document.querySelector("h2").innerText = "Player1 Wins";
}
if(num1 > num){
    document.querySelector("h2").innerText = "Player2 Wins";
}
if(num1 === num){
    document.querySelector("h2").innerText = "Draw";
}