"use strict"

const button = document.querySelector("button");
const li = document.querySelectorAll("li");

let position = 0;
// creation des constantes et variables


function nextImage() {
    position++;
// creation des fonctions



if (position == li.length){
    position = 0;
}

for(let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
}

li[position].classList.add('active');
}
// creation de la boucle for


button.addEventListener("click", nextImage);
// fonction a appeler


