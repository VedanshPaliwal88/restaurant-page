import ('./css/style.css');
import generateHome from './home.js';
import generateMenu from './menu.js';

let homeBtn = document.querySelector("#home")
homeBtn.addEventListener('click', () => generateHome());

let menuBtn = document.querySelector("#menu");
menuBtn.addEventListener('click', () => generateMenu());