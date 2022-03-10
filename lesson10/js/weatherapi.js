const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=345279e6dedde84e96c5cf9072b109b0";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(jsObject.main.temp);
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
  });
