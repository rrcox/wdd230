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

// Get current weather data
// const apiURL =
//   "https://api.openweathermap.org/data/2.5/weather?zip=45662&units=imperial&appid=345279e6dedde84e96c5cf9072b109b0";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     document.querySelector("#current-temp").textContent =
//       typeof jsObject.main.temp === "number"
//         ? Math.round(jsObject.main.temp)
//         : "N/A";

//     const iconSrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
//     const desc = jsObject.weather[0].description;
//     const windSpeed =
//       typeof jsObject.wind.speed === "number"
//         ? Math.round(jsObject.wind.speed)
//         : "N/A";
//     const windChill =
//       typeof jsObject.main.feels_like === "number"
//         ? Math.round(jsObject.main.feels_like)
//         : "N/A";

//     document.querySelector("#weathericon").setAttribute("src", iconSrc);
//     document.querySelector("#weathericon").setAttribute("alt", desc);
//     document.querySelector("figcaption").textContent = desc;
//     document.querySelector("#wind-speed").textContent = windSpeed;
//     document.querySelector("#wind-chill").textContent = windChill;
//   });
