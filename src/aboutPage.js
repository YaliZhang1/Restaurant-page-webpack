import aboutImage from "./assets/foodAbout.jpg";
import "./styles.css";

function createAboutPage() {
  // Get the content from the template.html file
  const aboutPageContent = document.getElementById("content");

  // Create about container
  const aboutContainer = document.createElement("div");
  aboutContainer.className = "about-container";

  // Create image element for the about page
  const Image = document.createElement("img");
  Image.className = "about-image";
  Image.src = aboutImage;

  aboutContainer.appendChild(Image);

  const title = document.createElement("h1");
  title.textContent = "About Us";
  aboutContainer.appendChild(title);

  const introParagraph = document.createElement("p");
  introParagraph.textContent =
    "Welcome to [Restaurant Name]! At [Restaurant Name], we bring a unique dining experience that blends tradition with innovation. Located in the heart of [City/Location], we’ve been serving up delectable dishes inspired by local flavors and crafted with the finest ingredients.";
  aboutContainer.appendChild(introParagraph);

  const storySection = document.createElement("div");
  storySection.className = "section";

  const storyTitle = document.createElement("h2");
  storyTitle.textContent = "Our Story";
  storySection.appendChild(storyTitle);

  const storyText = document.createElement("p");
  storyText.textContent =
    "Founded in [Year] by [Founder's Name], our restaurant started with a simple idea: to create a warm, inviting space where friends, families, and food lovers could gather and savor remarkable flavors. Over the years, we have grown from a small local eatery into one of [City]'s most beloved dining destinations, known for our [mention any specialties, such as 'house-made pasta' or 'signature cocktails'].";
  storySection.appendChild(storyText);

  aboutContainer.appendChild(storySection);

  const missionSection = document.createElement("div");
  missionSection.className = "section";

  const missionTitle = document.createElement("h2");
  missionTitle.textContent = "Our Mission";
  missionSection.appendChild(missionTitle);

  const missionText = document.createElement("p");
  missionText.textContent =
    "At [Restaurant Name], our mission is to offer a memorable dining experience that celebrates the richness of [Cuisine Style] cuisine. We strive to serve food that not only excites the taste buds but also connects with the heart and soul.";
  missionSection.appendChild(missionText);

  aboutContainer.appendChild(missionSection);

  // Create "Fresh Ingredients"
  const ingredientsSection = document.createElement("div");
  ingredientsSection.className = "section";

  const ingredientsTitle = document.createElement("h2");
  ingredientsTitle.textContent = "Fresh Ingredients, Authentic Flavors";
  ingredientsSection.appendChild(ingredientsTitle);

  const ingredientsText = document.createElement("p");
  ingredientsText.textContent =
    "We pride ourselves on using only the freshest ingredients, sourced from local farmers and trusted suppliers. Our seasonal menu changes regularly to highlight what’s fresh and available, allowing us to deliver flavors that are as vibrant as they are genuine.";
  ingredientsSection.appendChild(ingredientsText);

  aboutContainer.appendChild(ingredientsSection);

  // Create "Meet Our Chefs"
  const chefsSection = document.createElement("div");
  chefsSection.className = "section";

  const chefsTitle = document.createElement("h2");
  chefsTitle.textContent = "Meet Our Chefs";
  chefsSection.appendChild(chefsTitle);

  const chefsText = document.createElement("p");
  chefsText.textContent =
    "Our culinary team is led by Chef [Chef's Name], who brings a wealth of experience and passion to every dish. Trained in [mention any notable training], Chef [Chef's Name] combines traditional techniques with modern touches, ensuring that each plate is both visually stunning and delightful to taste.";
  chefsSection.appendChild(chefsText);

  aboutContainer.appendChild(chefsSection);

  aboutPageContent.appendChild(aboutContainer);
}

export default createAboutPage;
