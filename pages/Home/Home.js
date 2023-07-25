import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
      <h1>SERGIO MIRAMÓN</h1>
      <p>aficionado a la <a class="namemusic">música</a>, a la <a class="namegallery">fotografía</a> y al <a class="nametv" href="https://miramon.notion.site/ENTERTAINMENT-f36ef7788181420e8bbd0cd924d45b5c?pvs=4">séptimo arte</a></p>
</section>`;
};
