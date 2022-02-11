// first take 3 buttons and set initial value in h1
// click on inc button, increment the value
// click on dnc button, decrement the value 
// click on reset button, goes to initial value

// select initial value
let h1 = document.querySelector("h1");

// select all buttons
let inc = document.querySelector(".inc");
let dnc = document.querySelector(".dnc");
let reset = document.querySelector(".reset");

// selecting mouse movement
let movement = document.querySelector(".movement")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let fourth = document.querySelector(".fourth")
let input = document.querySelector("input")

let count = 0;
input.onclick = function(event){
    console.log(event.target.value)
    event.target.value = "Jaydeep"
    event.target.style.backgroundcolor = 'yellow';
} 
function incHandler(){
    count = count+1
    h1.textContent = count;
}

function dncHandler(){
    count = count-1
    h1.textContent = count;
}

function resetHandler(){
    count = 0
    h1.textContent = count;
}

function mouseMoveHandler(){
    first.innerText = event.screenX;
    second.innerText = event.screenY;
    third.innerText = event.clientX;
    fourth.innerText = event.clientY;
}

inc.addEventListener("click", incHandler);
dnc.addEventListener("click", dncHandler);
reset.addEventListener("click", resetHandler);
movement.addEventListener("mousemove", mouseMoveHandler);