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
        <h3>FULLSTACK DEVELOPER</h3>
      </div>
      <div class="info">
      <p>aficionado a la <a class="namemusic">música</a>, a la <a class="namegallery" href="https://photo-gallery-one-rouge.vercel.app/">fotografía</a> y al <a class="nametv" href="https://miramon.notion.site/SERIES-SEEN-THIS-2023-7749f5e3165e428c8894963dbd7a1bb0?pvs=4" target="blank">séptimo arte</a></p>
      </div>
</section>`;
};
