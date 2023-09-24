import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
      <div class="name">
        <h1>SERGIO MIRAMÓN</h1>
      </div>
      <div class="profession">
        <h2>JUNIOR FULL STACK DEVELOPER</h2>
      </div>
      <div class="info">
      <p>aficionado a la <a class="namemusic" href="https://albums2023.vercel.app/" target="blank">música</a>, a la <a class="namegallery" href="https://photo-gallery-one-rouge.vercel.app/" target="blank">fotografía</a> y al <a class="nametv" href="https://miramon.notion.site/SERIES-SEEN-THIS-2023-ba9d61a37fac428aab588606a1a63c11?pvs=4" target="blank">séptimo arte</a></p>
      </div>
</section>`;
};
