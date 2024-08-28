var radio = document.querySelector('.manual-btn')

 var cont = 1

document.getElementById('radio1').checked = true

setInterval(()=> {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}
var button = document.getElementById('read_button');

button.addEventListener('click', function() {
var card = document.querySelector('.card');
card.classList.toggle('active');

if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});




var button = document.getElementById('read_button1');

button.addEventListener('click', function() {
var card = document.querySelector('.card1');
card.classList.toggle('active');


if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});




var button = document.getElementById('read_button2');

button.addEventListener('click', function() {
var card = document.querySelector('.card2');
card.classList.toggle('active');

if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});





var button = document.getElementById('read_button3');

button.addEventListener('click', function() {
var card = document.querySelector('.card3');
card.classList.toggle('active');

if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});




var button = document.getElementById('read_button4');

button.addEventListener('click', function() {
var card = document.querySelector('.card4');
card.classList.toggle('active');

if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});




var button = document.getElementById('read_button5');

button.addEventListener('click', function() {
var card = document.querySelector('.card5');
card.classList.toggle('active');

if(card.classList.contains('active')){
    return button.textContent = 'Ler menos'
}
button.textContent = 'Ler mais'
});





const description = document.querySelector(".tooltip");

document.querySelectorAll('path').forEach((el) =>
    el.addEventListener('mouseover', (event)=>{

        event.target.className = ("enable");
        description.classList.add("active")
        description.innerHTML = event.target.id;
    })
);
document.querySelector('path').forEach((el) =>

    el.addEventListener("mouseout", ()=>{
        description.classList.remove("active");
    })

);

document.onmousemove = (e) =>{
    description.Style.left = e.pageX = "px";
    description.Style.top = (e.pageY - 70) + "px";
}


function expandir(){
    let expand = document.querySelector(".btn-exp")
    expand.classList.toggle('active');
}

let map = ""
let acre = document.getElementById('BR-AC 67.7%')
let alagoas = document.getElementById('BR-AL 69.2%')

acre.addEventListener('onmouseover', ()=>{
    if(map == acre){
        Img.src = ""
    }else if(map == alagoas)
    img.src = "imagens/sp.jpg"
})

function mover(){
    const btn = document.querySelector('.btn-circle');
    const colorswich = document.querySelector('.btn-dark');
    const color2 = document.querySelector('.btn-exp')

    color2.classList.toggle('color');
    colorswich.classList.toggle('swich');
    btn.classList.toggle('active');
    
}