import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<a href="/icons/images/all/cv.pdf" download="C.V. Sergio_Miramón.pdf" target="blank"><h2>CV</h2></a>
<div>
${Button("github", "./icons/images/all/github.png", "GitHub", "https://github.com/SergioMiramon")}
</div>
`;
