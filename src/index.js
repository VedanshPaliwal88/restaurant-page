import ('./css/style.css');
import generateHome from './home.js';
import generateMenu from './menu.js';
import generateAbout from './about.js';

generateHome();

let homeBtn = document.querySelector("#home")
homeBtn.addEventListener('click', () => generateHome());

let menuBtn = document.querySelector("#menu");
menuBtn.addEventListener('click', () => generateMenu());

let aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', () => generateAbout());