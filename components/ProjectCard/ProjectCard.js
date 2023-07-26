import "./ProjectCard.css";
export const ProjectCard = (project) => `
<div class="project-card">
<div class="header">
<a href=${project.link} target="blank">
<h2>${project.title}</h2>
</a>
<div>
<a href=${project.github} target="blank">
<img src="/icons/images/all/github.png" alt="github sergio miramon"/>
</a>
</div>
</div>
<a href=${project.link} target="blank">
<img src=${project.image} alt=${project.title}/>
</a>
<div class="detail">
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;
