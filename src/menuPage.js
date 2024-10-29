import "./styles.css";
import appetiserImage from "./assets/appetiser.jpg";
import dessertsImage from "./assets/desserts.jpg";
import entreesImage from "./assets/entrees.jpg";
import drinksImage from "./assets/drinks.jpg";

function createMenuPage() {
  // Get the content from the template.html file
  const menuPageContent = document.getElementById("content");
  // Create menu container
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  // Create menu title
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our  Menu";
  menuContainer.appendChild(menuTitle);

  // Create menu-items-box container
  const menuItemsBoxContainer = document.createElement("div");
  menuItemsBoxContainer.className = "menu-items-box-container";
  menuContainer.appendChild(menuItemsBoxContainer);

  // Menu categories and their contents
  const menuSections = {
    Appetizers: {
      image: appetiserImage,
      items: [
        {
          name: "Bruschetta",
          description: "Grilled bread with tomatoes and basil",
          price: "60 kr",
        },
        {
          name: "Stuffed Mushrooms",
          description: "Mushrooms with garlic and cheese",
          price: "70 kr",
        },
      ],
    },
    Entrees: {
      image: entreesImage,
      items: [
        {
          name: "Grilled Steak",
          description: "Served with seasonal vegetables",
          price: "200 kr",
        },
        {
          name: "Linguine Alfredo",
          description: "Creamy pasta with parmesan cheese",
          price: "120 kr",
        },
      ],
    },
    Desserts: {
      image: dessertsImage,
      items: [
        {
          name: "Chocolate Lava Cake",
          description: "Warm cake with a molten center",
          price: "80 kr",
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with coffee flavor",
          price: "90 kr",
        },
      ],
    },
    Drinks: {
      image: drinksImage,
      items: [
        {
          name: "Coffee",
          description: "Freshly brewed coffee",
          price: "30 kr",
        },
        {
          name: "House Wine",
          description: "Red or white, served by the glass",
          price: "70 kr",
        },
      ],
    },
  };

  // Iterate through the menu categories, creating each category and item content
  for (const [section, { image, items }] of Object.entries(menuSections)) {
    // Create a container for each section
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "section-container"; // Class for outer div

    // Create category titles
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section;
    sectionContainer.appendChild(sectionTitle);

    // Create category images
    const sectionImage = document.createElement("img");
    sectionImage.className = "menu-image";
    //将解构出来的image变量的值，赋值给你刚刚定义的sectionImage
    sectionImage.src = image;
    sectionImage.alt = `${section} image`;
    sectionContainer.appendChild(sectionImage);

    // Create a project list
    const itemList = document.createElement("div");
    itemList.className = "item-list";

    items.forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.className = "menu-item";

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      itemContainer.appendChild(itemName);

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      itemContainer.appendChild(itemDescription);

      const itemPrice = document.createElement("p");
      itemPrice.className = "price";
      itemPrice.textContent = item.price;
      itemContainer.appendChild(itemPrice);

      itemList.appendChild(itemContainer);
    });

    // Add itemList to sectionContainer
    sectionContainer.appendChild(itemList);

    // Add sectionContainer to menuContainer
    menuItemsBoxContainer.appendChild(sectionContainer);
  }

  menuPageContent.appendChild(menuContainer);
}

export default createMenuPage;

//lazy loadModule
// import "./styles.css";

// function createMenuPage() {
//   // Get the content from the template.html file
//   const menuPageContent = document.getElementById("content");

//   // Create menu container
//   const menuContainer = document.createElement("div");
//   menuContainer.className = "menu-container";

//   // Create menu title
//   const menuTitle = document.createElement("h1");
//   menuTitle.textContent = "Our Menu";
//   menuContainer.appendChild(menuTitle);

//   // Create menu-items-box container
//   const menuItemsBoxContainer = document.createElement("div");
//   menuItemsBoxContainer.className = "menu-items-box-container";
//   menuContainer.appendChild(menuItemsBoxContainer);

//   // Menu categories and their contents
//   const menuSections = {
//     Appetizers: {
//       image: () => import("./assets/appetiser.jpg"), // 使用函数懒加载
//       items: [
//         {
//           name: "Bruschetta",
//           description: "Grilled bread with tomatoes and basil",
//           price: "60 kr",
//         },
//         {
//           name: "Stuffed Mushrooms",
//           description: "Mushrooms with garlic and cheese",
//           price: "70 kr",
//         },
//       ],
//     },
//     Entrees: {
//       image: () => import("./assets/entrees.jpg"), // 使用函数懒加载
//       items: [
//         {
//           name: "Grilled Steak",
//           description: "Served with seasonal vegetables",
//           price: "200 kr",
//         },
//         {
//           name: "Linguine Alfredo",
//           description: "Creamy pasta with parmesan cheese",
//           price: "120 kr",
//         },
//       ],
//     },
//     Desserts: {
//       image: () => import("./assets/desserts.jpg"), // 使用函数懒加载
//       items: [
//         {
//           name: "Chocolate Lava Cake",
//           description: "Warm cake with a molten center",
//           price: "80 kr",
//         },
//         {
//           name: "Tiramisu",
//           description: "Classic Italian dessert with coffee flavor",
//           price: "90 kr",
//         },
//       ],
//     },
//     Drinks: {
//       image: () => import("./assets/drinks.jpg"), // 使用函数懒加载
//       items: [
//         {
//           name: "Coffee",
//           description: "Freshly brewed coffee",
//           price: "30 kr",
//         },
//         {
//           name: "House Wine",
//           description: "Red or white, served by the glass",
//           price: "70 kr",
//         },
//       ],
//     },
//   };

//   // Iterate through the menu categories, creating each category and item content
//   const loadImagesPromises = []; // 存储图片加载的 promises
//   for (const [section, { image, items }] of Object.entries(menuSections)) {
//     // Create a container for each section
//     const sectionContainer = document.createElement("div");
//     sectionContainer.className = "section-container"; // Class for outer div

//     // Create category titles
//     const sectionTitle = document.createElement("h2");
//     sectionTitle.textContent = section;
//     sectionContainer.appendChild(sectionTitle);

//     // Create category images
//     const sectionImage = document.createElement("img");
//     sectionImage.className = "menu-image";
//     sectionImage.alt = `${section} image`;

//     // Add the image promise to the array
//     loadImagesPromises.push(
//       image().then((imageModule) => {
//         sectionImage.src = imageModule.default; // 设置图片源
//       })
//     );

//     sectionContainer.appendChild(sectionImage);

//     // Create a project list
//     const itemList = document.createElement("div");
//     itemList.className = "item-list";

//     items.forEach((item) => {
//       const itemContainer = document.createElement("div");
//       itemContainer.className = "menu-item";

//       const itemName = document.createElement("h3");
//       itemName.textContent = item.name;
//       itemContainer.appendChild(itemName);

//       const itemDescription = document.createElement("p");
//       itemDescription.textContent = item.description;
//       itemContainer.appendChild(itemDescription);

//       const itemPrice = document.createElement("p");
//       itemPrice.className = "price";
//       itemPrice.textContent = item.price;
//       itemContainer.appendChild(itemPrice);

//       itemList.appendChild(itemContainer);
//     });

//     // Add itemList to sectionContainer
//     sectionContainer.appendChild(itemList);

//     // Add sectionContainer to menuContainer
//     menuItemsBoxContainer.appendChild(sectionContainer);
//   }

//   // Wait for all images to load before appending menuContainer to page
//   Promise.all(loadImagesPromises).then(() => {
//     menuPageContent.appendChild(menuContainer);
//   });
// }

// export default createMenuPage;
