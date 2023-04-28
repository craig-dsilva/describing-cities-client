import fetchDescription from "./fetchDescription.js";

const sentenceEl = document.querySelector("#sentence");
const bodyEl = document.querySelector("body");

const sentence = await fetchDescription(
  "https://backend.cloudproject.craigdsilva.com"
);

sentenceEl.innerText = sentence;
let cityName = sentence.split(" ")[0];
bodyEl.style.backgroundImage = `url(img/${cityName}.jpg)`;
