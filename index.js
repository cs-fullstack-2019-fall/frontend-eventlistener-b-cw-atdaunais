let body = document.getElementById("container");
let button1 = document.getElementById("1_button");
let button2 = document.getElementById("2_button");
let header = document.getElementById("header");

function changeTo1(){
    header.innerText = "1";
    body.classList.toggle("blue_bg")
}

function changeTo2(){
    header.innerText = "2";
    body.classList.toggle("red_bg")
}

button1.addEventListener("click", changeTo1);
button2.addEventListener("click", changeTo2);