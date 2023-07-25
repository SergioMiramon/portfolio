import "./Navbar.css";
// export const changeTheme = () => {
//   const themeBtn = document.querySelector("#themeBtn");
//   themeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("light");
//     changeText();
//   });
// };
// export const changeText = () => {
//   const themeBtn = document.querySelector("#themeBtn");
//   if (themeBtn.innerText === "☀") {
//     themeBtn.innerText = "☾";
//   } else {
//     themeBtn.innerText = "☀";
//   }
// };
export const Navbar = () => `
<nav>
<a href="#" id="homelink"><img class="logo" src="./icons/images/all/logo.png"></a>
<ul>
<li>
<a href="#" id="projectslink">Projects</a>
</li>
<!-- <li>
<button id="themeBtn">☀</button>
</li> -->
</ul>
</nav>
`;
