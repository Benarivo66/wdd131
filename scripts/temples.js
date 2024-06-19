const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();

const menu = document.getElementById('menu');
const navg = document.querySelector("nav");

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;

menu.addEventListener('click', () => {
    navg.classList.toggle('open');
    menu.classList.toggle('open');
})

