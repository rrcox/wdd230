const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet, index) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let dob = document.createElement("p");
  let pob = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute("src", prophet.imageurl);
  h2.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname} - ${index + 1}${suffix(
      index + 1
    )} Latter-Day President`
  );
  portrait.setAttribute("loading", "lazy");

  //Build dob and pob
  dob.textContent = `Date of Birth: ${prophet.birthdate}`;
  pob.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Add/append the section(card) with the h2 element, image, and paragraphs
  card.appendChild(h2);
  card.appendChild(dob);
  card.appendChild(pob);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

function suffix(index) {
  let str = "th";

  switch (index) {
    case 1:
      str = "st";
      break;
    case 2:
      str = "nd";
      break;
    case 3:
      str = "rd";
      break;
  }

  return str;
}
