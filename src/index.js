import "./styles.css";
import background from "./assets/background.jpg";
import createAboutPage from "./aboutPage.js";
import createHomePage from "./homePage.js";
import createMenuPage from "./menuPage.js";

const backgroundImg = document.getElementById("background");
backgroundImg.src = background;

const aboutPageButton = document.getElementById("about-page-btn");
aboutPageButton.addEventListener("click", () => {
  clearPage();
  createAboutPage();
});

const homePageButton = document.getElementById("home-page-btn");
homePageButton.addEventListener("click", () => {
  clearPage();
  createHomePage();

  // document.body.style.fontFamily = "Arial, sans-serif";
  // document.body.style.marginTop = "-100px";
});

const menuPageButton = document.getElementById("menu-page-btn");

menuPageButton.addEventListener("click", () => {
  clearPage();
  createMenuPage();
});

function clearPage() {
  document.getElementById("content").innerHTML = "";
}
