// Set today's date in header
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
console.log("lastMod:", lastMod);
document.getElementById("lastmod").textContent = lastMod;
