import "./styles.css";

function createHomePage() {
  // Get the content from the template.html file
  const homePageContent = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("main-container-homepage");

  //   const imgHomePageSection = document.createElement("section");
  //   imgHomePageSection.classList.add("imgHomePage");
  //   imgHomePageSection.id = "imgHomePageSection";
  //   imgHomePageSection.innerHTML = `
  //       <img src="${beautyImage}" alt="Homepage Image" />
  //   `;

  //   homeContainer.appendChild(imgHomePageSection);

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");
  heroSection.innerHTML = `
       <div id="heroWords">
        <h1>Enjoy your life veryday!</h1>
        <p>Only food and love are worth living up to ......</p>
        </div>
        `;
  homeContainer.appendChild(heroSection);

  const menuSection = document.createElement("section");
  menuSection.id = "menu";
  menuSection.innerHTML = `
        <h2>Menu Preview</h2>
        <div id="menu-preview">
            <div class="menu-item">
                <h3>Noodles</h3>
                <p>We have different types of noodles: flour-made, rice-made, and different flavors for you to choose. </p>
                <p>Price: 60 kr.--260kr.</p>
            </div>
            <div class="menu-item">
                <h3>Hamburgers</h3>
                <p>We offer American burgers and European burgers. You can choose from chicken, beef and pork. . . </p>
                <p>Price: 60 kr.--260kr.</p>
            </div>
        </div>
    `;
  homeContainer.appendChild(menuSection);

  const reviewsSection = document.createElement("section");
  reviewsSection.id = "reviews";
  reviewsSection.innerHTML = `
        <h2>Customer testimonials</h2>
        <div class="review">
            <p>"
This is one of my favorite restaurants! There is a new delicious experience every time you come!"</p>
            <p>- Ethan Foster</p>
        </div>
        <div class="review">
            <p>"The service was great and the food was delicious. Will definitely come again!"</p>
            <p>- Isabella Clark</p>
        </div>
    `;
  homeContainer.appendChild(reviewsSection);

  const contactSection = document.createElement("section");
  contactSection.id = "contact";
  contactSection.innerHTML = `
        <h2>Contact us</h2>
        <p>Address: Götgatan 12, 5tr
114 37 Stockholm</p>
        <p>Telephone: 070123456</p>
        <p>Open hours:</p>
         <p>Monday to Friday: 10:00--20:00</p>
<p>Saturday & Sunday: 10:00--21:00</p>
    `;
  homeContainer.appendChild(contactSection);

  homePageContent.appendChild(homeContainer);
}

export default createHomePage;
