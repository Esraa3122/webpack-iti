import { greet } from "./greet.js";
import './index.css';
import './navbar.css';
import bgimg from "./bg.png"

greet();

const imageElement = document.createElement("img");
imageElement.src = bgimg;
document.querySelector(".img_container").append(imageElement)