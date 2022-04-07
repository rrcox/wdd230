// Set today's date in header.
const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
today = date.toLocaleDateString("en-US", options);
document.getElementById("today").textContent = today;

// Set copyright year in footer
const currentDate = new Date(document.lastModified);
const copyrightYear = currentDate.getFullYear();
document.getElementById("copyright").textContent = copyrightYear;

// Set last modified date in footer
const lastMod = document.lastModified;
document.getElementById("lastmod").textContent = lastMod;

// Add event listener to grid and list buttons
// const listButton = document.getElementById("list-button");
// const gridButton = document.getElementById("grid-button");

// listButton.addEventListener("click", switchToList, false);
// gridButton.addEventListener("click", switchToGrid, false);

// Turn banner on or off depending on day of the week. On Mon and Tue, off rest
// of the week.
// const date = new Date();
const banner = document.getElementById("banner");
const day = date.getDay();
banner.hidden = ![1, 2].includes(day);

// Load temple directory
const cards = document.querySelector(".cards");
loadData();

document.addEventListener("click", (e) => {
  if (e.target && e.target.id.includes("btn")) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else e.target.classList.add("active");
  }
});

//-----------------------------------------------------------------------------

function loadData() {
  const requestURL = "data/data.json";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const temples = jsonObject["temples"];
      temples.forEach((temple, index) => displayCards(temple, index));
    });
}

//-----------------------------------------------------------------------------

function displayCards(member, index) {
  let card = document.createElement("section");
  let logo = document.createElement("img");
  let name = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let url = document.createElement("p");
  let button = document.createElement("button");

  card.classList.add("card-type");
  //   let logoUrl = `https://picsum.photos/200/100.webp?random=${index + 1}`;
  let logoUrl = member.img;

  logo.classList.add("card-logo-show");
  logo.setAttribute("src", logoUrl);
  logo.setAttribute("alt", `logo of ${member.name}`);
  logo.setAttribute("loading", "lazy");

  button.textContent = "\u2764";
  button.id = "btn" + index;

  name.textContent = member.name;
  address.textContent = member.address;
  phone.textContent = member.phone;
  url.textContent = member.url;

  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(url);
  card.appendChild(button);

  cards.appendChild(card);
}

//-----------------------------------------------------------------------------

// function switchToList() {
//   const cards = document.getElementById("display-mode");
//   cards.classList.remove("cards");
//   cards.classList.add("lists");

//   const imageCollection = document.getElementsByClassName("card-logo-show");
//   const images = Array.from(imageCollection);
//   images.forEach((image) => {
//     image.classList.remove("card-logo-show");
//     image.classList.add("card-logo-hide");
//   });

//   const sectionCollection = document.getElementsByClassName("card-type");
//   const sections = Array.from(sectionCollection);
//   sections.forEach((section) => {
//     section.classList.remove("card-type");
//     section.classList.add("list-type");
//   });
// }

// //-----------------------------------------------------------------------------

// function switchToGrid() {
//   const cards = document.getElementById("display-mode");
//   cards.classList.remove("lists");
//   cards.classList.add("cards");

//   const imageCollection = document.getElementsByClassName("card-logo-hide");
//   const images = Array.from(imageCollection);
//   images.forEach((image) => {
//     image.classList.remove("card-logo-hide");
//     image.classList.add("card-logo-show");
//   });

//   const sectionCollection = document.getElementsByClassName("list-type");
//   const sections = Array.from(sectionCollection);
//   sections.forEach((section) => {
//     section.classList.remove("list-type");
//     section.classList.add("card-type");
//   });
// }