import ('./css/style.css');
import generateHome from './home.js'

let homeBtn = document.querySelector("#home")
homeBtn.addEventListener('click', () => generateHome());